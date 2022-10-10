export default class FareRateService {
  constructor() {
    if (this.constructor == FareRateService) {
      throw new Error(" Object of Abstract Class cannot be created");
    }
  }

  addFareRate(rateDetails) {
    throw new Error("Abstract Method has no implementation");
  }

  getAllFareRateEntries() {
    throw new Error("Abstract Method has no implementation");
  }
}
