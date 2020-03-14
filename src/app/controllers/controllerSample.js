import ModelSample from '../models/modelSample';

class ControllerSample {
  async store(req, res) {
    console.log('teste');
    console.log(req.name);

    const modelSample = await ModelSample.create(req.body);

    return res.json(modelSample);
  }
}

export default new ControllerSample();
