import ErrorHandler from "../utils/error.js";
import Reservation from "../models/reservation.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, time, date } = req.body;
  if (!firstName || !lastName || !email || !phone || !time || !date) {
    return next(
      new ErrorHandler("Please fill out the entire reservation form!")
    );
  }
  try {
    await Reservation.create({ firstName, lastName, email, phone, time, date });
    res.status(201).json({
      success: true,
      message: "Reservation sent successful!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(" , "), 400));
    }
  }
};
