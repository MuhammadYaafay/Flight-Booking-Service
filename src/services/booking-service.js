const axios = require("axios");

const { BookingRepository } = require("../repositories");
const { ServerConfig } = require("../config");
const db = require("../models");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

async function createBooking(data) {

  try {
    const flight = await axios.get(
      `http://localhost:3000/api/v1/flights/${data.flightId}`
    );
    const flightData = flight.data.data;
    if (data.noOfSeats > flightData.totalSeats) {
      throw new AppError("no enough seats available", StatusCodes.BAD_REQUEST);
    }
    return true;
  } catch (error) {

  }
}

module.exports = {
  createBooking,
};
