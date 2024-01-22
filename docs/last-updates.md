# Vignette ID API updates

## March 2024
- preparation for adding a `Czech` `1` day vignette.
- from March 1st the cost of all Czech vignettes will be changed


## Januar 2024
- added a new product in Switzerland - tunnel Munt La Schera  / `tunnel-ch-muntlaschera`
- deprecate `start_from` in all endpoints
- add filters by `country` and by `type` to [GET /public/products](/docs/routes#products-list-endpoints)
- add filters by `status` to [GET /public/orders](/docs/routes#get-orders)
- added status `WILL BE ACTIVE`. This status is set if the vignette has been successfully registered and is considered active, but we are still waiting for a unique identifier from the national provider’s system. This happens when there is a heavy load on the national provider API.
  Check [Statuses List](/docs/routes/statuses)
- the logic for checking orders has been changed to prohibit the creation of duplicates. It is impossible to buy more than 1 vignette with the same country, palte and country of the vehicle, where periods may overlap.

**Request for data verification**

- if the national provider’s system does not respond for more than 5 minutes, we disable the ability to register immediate vignettes in the system. We ask all partners to increase the number of [product requests](/docs/routes#products-list-endpoints) in the system at least once every 30 minutes and no more than once every 5 minutes.
- vignette prices change very rarely, but in any case, we ask you to set up an automatic check once a day.

## December 2023
- added `1` day vignettes for `Austria`.
- added `3` days (weekend) vignette for `Bulgaria`.
- added `30`, `90` and `365` days vignettes for `Romania`. 
  Required send vin-code for this periods for Romanian vignettes


## August 2023
- added `Switzerland` vignettes for partners.

## June 2023
- added vehicle plate validation. [About patterns](/docs/routes/patterns)
  You can use `/public/validate-vehicle` route