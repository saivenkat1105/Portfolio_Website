There's a large gap between building a model that works well on a validation set and deploying that model onto a microcontroller inside a moving vehicle. I learned this the hard way during my time at **Jaguar Land Rover**.

## The Problem

We were virtualising **thermal sensors** — replacing physical sensors with ML models that predict their readings in real-time using other available signals. The models had to:

1. Run on **edge hardware** with limited compute
2. Produce predictions within tight **latency budgets**
3. Be robust across all **operating conditions** the vehicle might encounter

## What Actually Mattered

### Data Quality > Model Complexity

The biggest bottleneck was never the model architecture — it was **data quality**. Sensor readings from rig tests, 1D simulations, and real vehicles rarely agree perfectly. Aligning these required:

- Careful **feature engineering** to make signals comparable
- **Domain adaptation** strategies
- A lot of manual inspection and domain knowledge

### The Pipeline is the Product

The model is one component. The **ML pipeline** — from raw data to deployed binary — is what actually matters in an industrial setting. We invested heavily in making the pipeline:

- **Reproducible**: every step logged and versioned
- **Fast**: reduced delivery cycle from 1 week → 4 hours
- **Automatable**: minimal manual intervention for new vehicle variants

## Takeaways

- Spend 80% of your time on data, 20% on the model.
- The deployment environment defines your constraints — understand it first.
- A fast pipeline enables more iteration, which is ultimately how you get to a good model.

> "The most reliable test of a model is reality."

This experience reshaped how I think about ML. It's an engineering discipline, not just applied statistics.
