import AgendaModel from "../models/AgendaModel.js";

export const getAllContactos = async (req, res) => {
  try {
    const response = await AgendaModel.findAll();
    res.json(response);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getContacto = async (req, res) => {
  try {
    const response = await AgendaModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createContacto = async (req, res) => {
  try {
    await AgendaModel.create(req.body);
    res.json({
      message: `¡Registro creado correctamente!`,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateContacto = async (req, res) => {
  try {
    await AgendaModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: `¡El registro se actualizo correctamente!`,
    });
    console.log("json ==>", res.jason());
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteContacto = async (req, res) => {
  try {
    await AgendaModel.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: "¡El registro se elimino correctamente!" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
