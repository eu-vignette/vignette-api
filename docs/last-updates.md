# Vignette ID API updates

## NEXT updates

## September 2024
- launch Partner Panel. [Login](https://www.e-vignette.app)
  You can use this tool during integration testing, as well as track all real orders.


## August 2024
- added status `FUTURE`
  Check [Statuses List](/docs/routes/statuses)


## July 2024
- You can use `/public/orders/:id/status` route to get status of order without another information.
- Now you have to option to provide payment method of users:
  - If `order_has_been_paid: true` its mean that you collect payment on your side
  - If `order_has_been_paid: false` API return payment link in response. We process payment on our side. You can use `/public/orders/:id/status` to check status od this order.


## June 2024
- added `7`, `15` and `30` days vignettes *2B* category for `Moldova`.


## May 2024
- From 6th May we change processing for Austrian vignettes and data what we return (Please check emails to read description)
- We remove vignette-hu-2c (bus category) from API
- added `7`, `15` and `30` days vignettes *2A* category for `Moldova`. In May and June we test this orders and later add 2B category


## April 2024
- added a `Hungarian` `1` day vignette for all Vehicle types.
- Now you can check National provider system status.
  You can use `/public/products/status` route


## March 2024
- added a `Czech` `1` day vignette.
- from March 1st the cost of all Czech vignettes will be changed
- added a `Romanian` `1` day vignette.


## Februar 2024
- Added automation for checking partner payments. 

  How it works: 
    The system keeps records of the partner’s debt. If a partner's debt reaches 2,000 euros, the partner automatically receives a reminder that payment needs to be made and the amount due. 
    From this moment on, the partner has 72 hours to make the payment.

    When the amount specified in the email is credited to the bank account, the partner receives another notification of a successful transaction.

    If no payment has been made within 72 hours, access to the API is automatically disabled.

    From the moment the API is disabled, the fine begins to accrue. The calculation is based on the agreement that was signed at the beginning of cooperation.

    When the debt is paid, the partner receives an email with the amount of the fine due and an invoice. The partner has 72 hours to pay the fine to avoid being disconnected from the API again.

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