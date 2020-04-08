# SFC Planet Field Simulation
## Created by Andrew Jessen-Tyler
## Original Game by Blue Frog Gaming

## Background Information
* [Starfleet Commander (Original Universe)](https://playstarfleet.com/)
* [Planet's Field Size on the SFC Wiki ](http://wiki.playstarfleet.com/index.php/Fields#Fields)
* [Blue Frog Gaming's Official Website](http://bluefroggaming.com/)

### Backstory
Blue Frog Gaming has a series of online, HTML based games, the first of which was "Starfleet Commander." Over time, they would launch additional "unvierses" that allow for a fresh start for players and may alter some gameplay aspects, such as Extreme which doubles the speed of building and Nova which increases the original speed by 1.5 and added in some new ships among other features. I started playing them years back, starting with X2, and only recently got into them again, and plan to use all my skills to bring me to the top of the leader board in my main universe (X6 as of writing this.)
What I am focusing on today is colonization and planet fields. When you start the game, you have an initial home planet with 163 fields. Fields are the amount of spaces you have to build your planet's buildings on. 1 building = 1 field. Upgrading a building also takes up a field. When you unlock the Gaia ship, you unlock the ability to colonize new planets, where you start over buildings but maintain your research and can even transport resources and ships between the planets you own. When you colonize a planet, it is given a random number of fields based off of a number of factors, such as planet slot.
While you would likely only build your main buildings up to a certain point (Capitol to level 10, Shipyard to level 13, factory to level 4, etc.), having more fields means you can upgrade your energy producing buildings and mines up, which will give you a faster rate of resources over time. The most you can ever get is 320 fields, so ideally you'd want all planets to have that 320 slot (most people keep their homeworld still, and will actually be content with a planet field of 200 or more, while abandoning any planets they colonize that have less than 200 fields).
So my question here is this. What are the actual odds of getting a 320 field planet?

### How to Use
Use the 'npm start' script to run the program. You may adjust the amount of simulations for more or less precision. For reference, on my system, 400 thousand simulations takes about 1 second.

### Conclusion
For my results, I ran the simulation 25 million times on planet slot 4. I found that you only have about a 0.11% chance of getting the maximum fields of 320, with about a 2.3% chance of getting a planet size at or over 300 fields. I'm surprised by the bigger than expected odds for 300 fields or more, but the 320 field chance is about what I expected.


##### License
MIT License

Copyright (c) 2020 Andrew Jessen-Tyler

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
