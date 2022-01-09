# UFO sightings

## Overview :
Dana’s webpage and dynamic table are working as intended, but she’d like to provide a more in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time. The purpose of this project is to add additional filters : city, state, country, and shape and provide users ability to search by these elements. 

## Results :
The default view of the webpages displays data for all UFO sightings from data.js.
Here is the link to the default view : [Default view of UFO Sightings](https://github.com/dhaval-28/UFOs/blob/main/static/images/UFO_DefaultView.png)

Here is the filtered view of UFO sightings. In the screen below, I have entered following details in the filter search.   
*  Enter Date = 1/1/2010
*  Enter City = el cajon
*  Enter State = ca
*  Enter Country = us
*  Enter Shape = triangle

The search result displays 2 records from data.js which matches the filter criteria specified above. ![Search Results after fitler](https://github.com/dhaval-28/UFOs/blob/main/static/images/UFO_AfterFilter.png)

Users can serach by any of these 5 search fields. They can search by one field, or combination of one or more or all. 

## Summary :

**Drawback of this new Design*
* 1. The filter search form does not clear on it's own. For new set of filters, user need to manually clear each entry for date, city, state, country and shape.

**Recommendations*
* 1. There should be a clear form button in the bottom to clear the search form.
* 2. After the results been displayed based on the filter criteria, all the filter criteria should be displayed somewhere on the page (preferably on top of the result table).
