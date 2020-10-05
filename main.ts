// Created by: Mariam Abugamga
// 
// Created on: Oct, 5, 2020
// 
// This program finds the area of a trapezoid
game.splash("Let's calculate the area of a Trapezoid. ")
let top = game.askForNumber("Enter the top of the trapezoid")
let bottom = game.askForNumber("Enter the bottom of the trapezoid")
let height = game.askForNumber("Enter the height of the trapezoid")
let area = (top + bottom) * (height / 2)
game.splash("The area of the Trapezoid" + top + "cm by" + (top + bottom) + "cm is" + height + "cm is" + convertToText(area) + "cm2")
