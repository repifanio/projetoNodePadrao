import ModelSample from '../models/modelSample';

class ControllerSample {
  async store(req, res) {
    const modelSample = await ModelSample.create(req.body);

    return res.json(modelSample);
  }
}

export default new ControllerSample();
