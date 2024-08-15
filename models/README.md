---
library_name: transformers
base_model: sberbank-ai/rugpt3medium_based_on_gpt2
tags:
- generated_from_trainer
metrics:
- accuracy
model-index:
- name: essays
  results: []
---

<!-- This model card has been generated automatically according to the information the Trainer had access to. You
should probably proofread and complete it, then remove this comment. -->

# essays

This model is a fine-tuned version of [sberbank-ai/rugpt3medium_based_on_gpt2](https://huggingface.co/sberbank-ai/rugpt3medium_based_on_gpt2) on an unknown dataset.
It achieves the following results on the evaluation set:
- Loss: 2.5354
- Accuracy: 0.5681

## Model description

More information needed

## Intended uses & limitations

More information needed

## Training and evaluation data

More information needed

## Training procedure

### Training hyperparameters

The following hyperparameters were used during training:
- learning_rate: 5e-05
- train_batch_size: 1
- eval_batch_size: 1
- seed: 42
- optimizer: Adam with betas=(0.9,0.999) and epsilon=1e-08
- lr_scheduler_type: linear
- num_epochs: 3.0

### Training results



### Framework versions

- Transformers 4.45.0.dev0
- Pytorch 2.3.1+cu121
- Datasets 2.21.0
- Tokenizers 0.19.1
