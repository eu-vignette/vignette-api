# Statuses list in system

- `PENDING` - means that the vignette is awaiting further action or approval. It's **not yet `ACTIVE`**, but it's in a queue or waiting list for processing.
    Can be canceled after 15 minutes by [Cancel Pending Order](https://api.vignette.id/docs/routes#cancel-pending-order) if the status has not changed to `WILL BE ACTIVE` or `ACTIVE` or `REFUNDED`

- `WILL BE ACTIVE` - indicates that the vignette is registered with the national provider and is considered active. It is expected to receive a unique identifier and file, after which it will switch to `ACTIVE` status

- `ACTIVE` - indicates that the vignette is currently in use. It's active and functioning as expected.

- `EXPIRED` - signifies that the vignette is no longer active or valid. This could be due to a time limit that has been exceeded or a condition that is no longer met.

- `REFUNDED` - indicates that a chargeback was caused manualy by us or by [Cancel Pending Order](https://api.vignette.id/docs/routes#cancel-pending-order). The vignette is considered unregistered with the national provider or he returned information that this vehicle already has an active vignette for the selected period

- `DELETED` - indicates an unknown error that resulted in the vignette being deleted from the queue. You need to contact us as soon as possible to check your case