const { Reservation, Hotel } = require("../../models")
module.exports = {
 
  my: async (req, res) => {
    try {
      const hotels = await Hotel.find();
      return res.status(200).json(
        {
          hotel: hotels[0]
        }
      );
    } catch (error) {
      return res.status(500).json(
        {
          error: err.message ? err.message : err,
        }
      );
    }

  },
 

}