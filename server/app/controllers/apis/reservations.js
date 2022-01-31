const { Reservation } = require("../../models")
module.exports = {
  reserver: (req, res) => {
    // get room by availibilite
    let newreservation = new Reservation({
      ...req.body,"user_id":req.userId
    });
    newreservation
      .save()
      .then((reservation) => {
        return res.send({
          message: "reservation added successfully",
          reservation,
        });
      })
      .catch((err) => {
        return res.status(500).send({
          message: err,
        });
      });
  },
  my: async (req, res) => {
    try {
      const mys = await Reservation.find({user_id:req.userId});
      return res.status(200).json(
        {
          reservations: mys
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
  cancel:async (req, res) => {
    const reser = await Reservation.findById(req.params.id);
    reser.update({ cancel: true },
      async (err, docs) => {
        if (err) {
          return res.status(404).send({
            message: err,
          });
        }
        // console.log(docs.name === req.body.name);
        return res.send({
          message: "Reservation canceled succefully!",
        });
      }
    );
  }

}