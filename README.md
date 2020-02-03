# HW7-ES6

## Generate PDF With Github User Profile Using Node

- Introduction

This project involves node js and ES6. When a user opens the terminal they are asked 2 questions. What is their github user name and what is their favorite color. Once they enter this information, a PDF is generated displaying all of their github user information. Including the user's github profile image, name, links to their location, github profile, and blog, user bio, number of public repositories, number of followers, number of github stars, and number of users following. Also the background color of the PDF corresponds to the color the user specified at the outset.

## Technologies Used

- [JavaScript](https://www.javascript.com/)

- [Node](https://www.npmjs.com/package/node-info)

- [Github Api](https://api.github.com/users/)

## Modules Used

- Inquirer
- Axios
- FS
- Util
- Puppeteer
- Path
- Open

## Troubleshooting

This project generates a PDF. However as soon as the PDF is generated with Adobe and it is "open" you can no longer generate another PDF using node and typing in your file name because it throws an error saying: "Ebusy: resource is busy or blocked" because the PDF is currently open it will not open another.

## Future Expansion

A goal for this project in the future would be to design the program with the functionality to either close the current PDF, so that another could be generated without throwing an error, or to number the PDF's as they get generated PDF1, PDF2, PDF3, and so forth. Goals for the future! :smile:

## Giphy

![](https://media.giphy.com/media/Y13yz061S03b1Bw6Lp/giphy.gif)

## Author

- Esther Walker

## Acknowledgments

Thank you so much to my instructor and my TA's and also my class mates and members of She's Coding for all their help and support during this project! :smile:

## License

The MIT License (MIT)

Copyright (c) 2020

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

The Software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the Software.
