# Acceptance criteria

## Welcome screen

Given that I land at the developers site Welcome screen at Intuitivo.
Then I am able to find a title, a subtitle and paragraphs detailing a description of Inuitivo's mission and API.

## Side bar

As a developer I need to be able to use the navigation side bar to find reference documentation about Intuitivo's API
When I go over to the side bar I should be able to find and click the "APOPs" category
Then I will be able to see a description page for APOPs
Then I will be able to see two sub-categories in the nav-bar: `Get All`, and `Get by Id or QR`

When I click on either sub-category I should be able to get the API details for each request

## Jump To Feature

As a developer I want to quickly jump into any category or sub-category.
When I click on the JUMP TO button, or I use the keys `Ctrl-/`
Then I should get a modal for filtering categories or sub-categories

When I press `Ctrl-/` and type 'Create transaction' on the popup modal
Then I should get that Category filtered out

## Header Search Bar

As a developer I should be able to quickly find out any content in the API documentation.
When I click on the Search button of the header, or otherwise press `Ctrl-k`
Then I should get a modal popup featuring a search bar
When I start typing something in the search bar
Then results should be loaded bearing any mention of my search terms
