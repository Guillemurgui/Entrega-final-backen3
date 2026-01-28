import * as adoptionService from "../services/adoption.service.js";


export const getAdoptions = async (req, res) => {
  const adoptions = await adoptionService.getAll();
  res.json(adoptions);
};

export const createAdoption = async (req, res) => {
  const adoption = await adoptionService.create(req.body);
  res.status(201).json(adoption);
};



