import FareRate from "../../models/FareRates";
import FareRateService from "../FairRateService";

export default class FareRateServiceImpl extends FareRateService {
  initDatabase(db) {
    db.transaction((tnx) => {
      tnx.executeSql(
        `CREATE TABLE IF NOT EXISTS FareRate (id INTEGER PRIMARY KEY AUTOINCREMENT, date DATE default CURRENT_DATE, first_km DECIMAL(8,2), next_kms  DECIMAL(8,2), waiting_time  DECIMAL(8,2) )`,
        [],
        () => {
          return true;
        },
        (error) => {
          console.log("error on creating table: " + error.message);
          return false;
        }
      );
    });
  }

  addFareRate(db, rateDetails) {

    db.transaction((tnx) => {
      tnx.executeSql(
        `INSERT INTO FareRate (first_km, next_kms, waiting_time) VALUES (?,?,?)`,
        [rateDetails.firstKm, rateDetails.otherKm, rateDetails.waitingTime],
        (_, results) => {
          if (results.rowsAffected > 0) {
            return true;
          } else false;
        }
      );
    });
  }

  getAllFareRateEntries() {}
}
