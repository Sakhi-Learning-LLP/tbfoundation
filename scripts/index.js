var mylist = document.getElementById("myList");
mydata = {
    "sections":[
        {
            "desc":"Variables, Expressions, Input and Output",
            "video":"https://s3.ap-southeast-1.amazonaws.com/www.sakhilearning.in/techbridge/TeachBridge+Foundation+V01+Z1S1+Variables+IO+Expressions.mp4",
            "exercises":[
                {
                    "code":"exercise 1",
                    "desc":"<p>Create a program that asks the user to input two numbers.&nbsp;</p>  <p>The program should then print the sum of the numbers provided by the user.&nbsp;</p>  <p>Here is an example to clarify:</p>  <p>If the user-provided 90, and 67 as inputs. The program will have the output</p>  <p><span style=\"color: #339966;\">The sum of 90 and 67 is 157</span></p>  <p>&nbsp;</p>"
                },
                {
                    "code":"exercise 2",
                    "desc":"<p>Create a program that asks the user to input two numbers.&nbsp;</p>  <p>The program should then print the average of the numbers provided by the user.&nbsp;</p>  <p>Here is an example to clarify:</p>  <p>If the user-provided 90, and 67 as inputs. The program will have the output</p>  <p><span style=\"color: #339966;\">The average of 90 and 67 is 78.5</span></p>  <p>&nbsp;</p>"
                },
                {
                    "code":"exercise 3",
                    "desc":"<p>Create a program that asks the user to input three numbers.&nbsp;</p> <p>The program should then print the average of the numbers provided by the user.&nbsp;</p> <p>Here is an example to clarify:</p> <p>If the user-provided 90, 45, and 67 as inputs. The program will have the output</p> <p><span style=\"color: #339966;\">The average of 90, 45, and 67 is 67.3</span></p> <p>&nbsp;</p>"
                },
                {
                    "code":"exercise 4",
                    "desc":"<p>Create a program that asks the user to input the radius of a circle.&nbsp;</p> <p>The program should then print the area of the circle.</p> <p>The area of the circle is calculated as</p> <p><strong>3.14 * radius * radius&nbsp;</strong></p> <p>Here is an example to clarify:</p> <p>If the user-provided 7 cm as the radius of the circle. The program will have the output</p> <p><span style=\"color: #339966;\">The area of the circle having a radius 7 will be 153.86</span></p>"
                },
                {
                    "code":"exercise 5",
                    "desc": "<p>Create a program that asks the user to input the length and breadth of a rectangle.&nbsp;</p> <p>The program should then print the area of the rectangle.</p> <p>The area of the rectangle is calculated as</p> <p><strong>area = length * breadth</strong></p> <p>Here is an example to clarify:</p> <p>If the length of the rectangle is 7, and the breadth is 5. The program will have the output</p> <p><span style=\"color: #339966;\">The area of the rectangle having a length and breadth of 7cm, 5cm respectively is 35 square cm.</span></p>"
                },
                {
                    "code":"exercise 6",
                    "desc":"<p>Create a program that asks the user to input the base and height of a triangle.&nbsp;</p> <p>The program should then print the area of the triangle.</p> <p>The area of the rectangle is calculated as</p> <p><strong>area = 0.5 * base * height</strong></p> <p>Here is an example to clarify:</p> <p>If the base of the triangle is 7cm, and the height is 5. The program will have the output</p> <p><span style=\"color: #339966;\">The area of the triangle having a base and height of 7cm, 5cm respectively is 17.5 square cm.</span></p>"
                },
                {
                    "code":"exercise 7",
                    "desc":"<p>Create a program that swaps the values stored in two variables.</p> <p>For example, if there are two variables <strong>num1</strong>, and <strong>num2</strong></p> <p>where <strong>num1</strong> has <strong>20</strong> stored in it, and <strong>num2</strong> has <strong>30</strong> stored in it</p> <p>What is stored into num2 gets into num1, and what is stored in num1 goes into num2</p> <p>so num1 should now have 30 and num2 should have 20</p> <p>&nbsp;</p>"
                },
                {
                    "code":"exercise 8",
                    "desc":"<p>Create a program that takes a number from the user and prints a multiplication table for the same.</p> <p>For example, if the user-provided 7 as input, then the program will print</p> <p><span style=\"color: #339966;\">7 * 1 = 7</span></p> <p><span style=\"color: #339966;\">7 * 2 = 14</span></p> <p><span style=\"color: #339966;\">7 * 3 = 21</span></p> <p><span style=\"color: #339966;\">7 * 4 = 28</span></p> <p><span style=\"color: #339966;\">7 * 5 = 35</span></p> <p><span style=\"color: #339966;\">7 * 6 = 42</span></p> <p><span style=\"color: #339966;\">7 * 7 = 49</span></p> <p><span style=\"color: #339966;\">7 * 8 = 56</span></p> <p><span style=\"color: #339966;\">7 * 9 = 63</span></p> <p><span style=\"color: #339966;\">7 * 10 = 70</span></p> "
                },
                {
                    "code":"exercise 9",
                    "desc":"<p>Write a program to convert from Celsius to Fahrenheit. The program must accept temperature in Celsius as input, use the following formula to convert it into Fahrenheit, and print the value in Fahrenheit</p> <p><strong>⁰F = (⁰C * 9/5) + 32</strong></p> <p>For example, if the user provides 37.0 as a value for Celsius, the program must print</p> <p><strong><span style=\"color: #339966;\">37.0⁰ Celcius = 98.6⁰ Fahrenheit</span></strong></p>"
                },
                {
                    "code":"exercise 10",
                    "desc":"<p>Write a program to convert from Fahrenheit to Celsius. The program must accept temperature in Fahrenheit as input, use the following formula to convert it into Celsius, and print the value in Celsius</p> <p><strong>⁰C = ( 5 / 9 ) * ( ⁰F &ndash; 32 )</strong></p> <p>For example, if the user provides 98.0 as a value for Fahrenheit, the program must print</p> <p><strong><span style=\"color: #339966;\">98.0⁰ Fahrenheit = 36.6⁰ Celcius</span></strong></p>"
                }
            ]
        },
        {
            "desc":"Flow Charts, Operators, Branching",
            "video":"https://s3.ap-southeast-1.amazonaws.com/www.sakhilearning.in/techbridge/videos/TeachBridge+Foundation+V01+Z1S2+Logical+Operators+Branching+FlowCharts.mp4",
            "exercises":[
                {
                    "code":"exercise 1",
                    "desc":"<p>Write a program to receive three numbers as user input, and print the maximum of the three</p> <p>For example, if the user provides 98.0, 107.9, 87 as input, the program must print</p> <p><span style=\"color: #339966;\">Maximum of 98.0, 107.9, 87 will be 107.9</span></p>"
                },
                {
                    "code":"exercise 2",
                    "desc":"Write a program to accept the marks obtained by a student, and print the grade according to the table below   <table border=01 ><tbody><tr><td><strong>Score in subject</strong></td><td><strong>Grade</strong></td></tr><tr><td>&gt;=90</td><td>A</td></tr><tr><td>80-89</td><td>B</td></tr><tr><td>70-79</td><td>C</td></tr><tr><td>60-69</td><td>D</td></tr><tr><td>50-59</td><td>E</td></tr><tr><td>&lt;50</td><td>F</td></tr></tbody></table>"
                },
                {
                    "code":"exercise 3",
                    "desc":"<p><span style=\"font-weight: 400;\">Accept a number as user input, and display following message, when input to the program is less than 1 and more than 99</span></p> <p><span style=\"font-weight: 400; color: #339966;\">Please specify a number greater than 0 and less than 100.</span></p> <p>&nbsp;</p> <p><br /><br /></p>"
                },
                {
                    "code":"exercise 4",
                    "desc":"<p><span style=\"font-weight: 400;\">Write a program to recieve two numbers as input from user, subtract the smaller number from larger one and print the result. </span><span style=\"font-weight: 400;\">Example</span></p> <p><span style=\"color: #339966;\">If the first number is 10 and second is 15, print 5</span></p> <p><span style=\"color: #339966;\">If the first number is 18 and second number is 5, print 13</span></p> <p>&nbsp;</p> <p><br /><br /></p>"
                },
                {
                    "code":"exercise 5",
                    "desc":"<p>Write a program to determine if a person is Thin, Normal, Overweight, or Obese</p> <p>This is determined based on the value of BMI (Body Mass Index)</p> <p>&nbsp;</p> <table border=\"1px\"> <tbody> <tr> <td class=\"has-text-align-center\" data-align=\"center\"><em><strong>BMI Range</strong></em></td> <td class=\"has-text-align-center\" data-align=\"center\"><em><strong>Category</strong></em></td> </tr> <tr> <td class=\"has-text-align-center\" data-align=\"center\">&lt; 18.5</td> <td class=\"has-text-align-center\" data-align=\"center\">Thin</td> </tr> <tr> <td class=\"has-text-align-center\" data-align=\"center\">18.5 &ndash; 25</td> <td class=\"has-text-align-center\" data-align=\"center\">Normal</td> </tr> <tr> <td class=\"has-text-align-center\" data-align=\"center\">25 &ndash; 30</td> <td class=\"has-text-align-center\" data-align=\"center\">Overweight</td> </tr> <tr> <td class=\"has-text-align-center\" data-align=\"center\">&gt; 30</td> <td class=\"has-text-align-center\" data-align=\"center\">Obese</td> </tr> </tbody> </table> <p>You need to recieve weight and height as input to the program, and calculate the BMI first.</p> <p>This is the formula for Calculating BMI in Metric Units,</p> <p><strong><em>BMI = (Weight in Kg) / (Height in Meters * Height in Meters)</em></strong></p> <p>&nbsp;</p> <p>For example, if<br />weight = 75 kg, height = 1.5 m<br />BMI = 75 / (1.5*1.5) = 33.33</p> <p>program must print</p> <p><span style=\"color: #339966;\">This person is Obese</span></p> <p>&nbsp;</p> <p><br /><br /></p>"
                },
                {
                    "code":"exercise 6",
                    "desc":"<p>Write a program to calculate the electricity bill for the given unit. Here is how the tariff is calculated</p> <table border=\"1px\"> <tbody> <tr> <td><strong>Fixed Price</strong></td> <td><strong>Unit</strong></td> <td><strong>Charges per unit</strong></td> </tr> <tr> <td>100</td> <td>0-100</td> <td>6.30</td> </tr> <tr> <td>100</td> <td>101-200</td> <td>6.85</td> </tr> <tr> <td>100</td> <td>&gt;200</td> <td>7.40</td> </tr> </tbody> </table> <p>For example:-</p> <p>Unit = 270<br />Total bill = fixed price + bill for first 100 unit (0-100) + bill for next 100 unit (101-200) + bill for remaiing unit (&gt;200)<br />= 100 + 100 * 6.30 + 100 * 6.85 + (270-200)*7.40<br />= 100 + 630 + 685 + 518<br />= 1933</p> <p>the program must print&nbsp;</p> <p><span style=\"color: #339966;\">Your toral bill: 1933</span></p> <p><span style=\"color: #339966;\">Total units consumed: 270</span></p> <p><span style=\"color: #339966;\">Breakup:</span></p> <p><span style=\"color: #339966;\">Fixed charges: 100</span></p> <p><span style=\"color: #339966;\">Charges for first 100 units: 630</span></p> <p><span style=\"color: #339966;\">Charges for 101 to 200 units: 685</span></p> <p><span style=\"color: #339966;\">Changes for consumption beyond 200 units: 518</span></p> <p>&nbsp;</p>"
                }
            ]
        },
        {
            "desc":"Functions, Integer Division and Modulo Operator",
            "video":"https://s3.ap-southeast-1.amazonaws.com/www.sakhilearning.in/techbridge/videos/TeachBridge+Foundation+V01+Z1S3+Functions+Integer+Division+Modulo+Operator.mp4",
            "exercises":[
                {
                    "code":"exercise 1",
                    "desc":"<p>Write a program to determine if a year is a leap year or not.&nbsp;</p> <p>A year is called leap year if the year is divisible by four, except for the years which are divisible by 100 but not divisible by 400. Therefore, the year 2000 was a leap year, but the years 1700, 1800, and 1900 were not.</p> <p>for example if the user gives 2000 as an input, print</p> <p><strong><span style=\"color: #339966;\">Year 2000 was a leap year</span></strong></p> <p>and if the user gives 1700 as an input, print</p> <p><strong><span style=\"color: #339966;\">Year 1700 was not a leap year</span></strong></p> <p>&nbsp;</p>"
                },
                {
                    "code":"exercise 2",
                    "desc":"<p>Write a program to calculate the total value, if compunding interest is charged.</p> <p>If you do not know the concept of compounding interest, <a href=\"https://www.youtube.com/watch?v=kplwkMifuKQ&amp;t=12s\">this video</a> can help. You can take help from other resources available on internet</p> <p>For the purpose of this program you need to get following inputs from the user</p> <p><strong>P</strong>&nbsp;= the principal investment amount (the initial deposit or loan amount)<br /><strong>r</strong> = the annual interest rate<br /><strong>n</strong>&nbsp;= the number of times that interest is compounded per unit t<br /><strong>t</strong>&nbsp;= the time the money is invested or borrowed for</p> <p>&nbsp;</p> <p>So if someone borrowed Rs. 10000, we will set <strong>P to 10000</strong></p> <p>If the interest rate was 12% per annum, we will set <strong>r to 12.0</strong></p> <p>If it is compounding quarterly, than interest is accrued 4 times a year, so we will set <strong>n to 4</strong></p> <p>If the money is borrowed for 5 years, we will set <strong>t to 5</strong></p> <p>&nbsp;</p> <p>We will use this formula to calculate the total value after 5 years</p> <p><strong>A = P * (1 + r/(n*100))^(n*t)</strong></p> <p><strong>Here A</strong> denotes the future value of the investment/loan, including interest</p> <p><span style=\"text-decoration: underline;\"><strong>Note</strong>: As we need to calculate the power of a number here, please learn about the <a href=\"https://www.javatpoint.com/java-math-pow-method\">Math.pow</a> function before you attempt to write this program</span></p> <p>&nbsp;</p> <p>so in this example, we should print</p> <p><span style=\"color: #339966;\"><strong>Future value of this investment is: 18061.11</strong></span></p> <p>&nbsp;</p> <p>&nbsp;</p>"
                },
                {
                    "code":"exercise 3",
                    "desc":"<p>Write a program to calculate the distance between two points</p> <p>Assume we have two points M and N, with coordinates (x<sub>1</sub>, y<sub>1</sub>) and (x<sub>2</sub>, y<sub>2</sub>) respectively. Their distance&nbsp; can be represented as MN and it can be calculated as given below formula,</p> <div class=\"code-block code-block-1\">&nbsp;</div> <p>The first point (M):- (x<sub>1</sub>, y<sub>1</sub>)<br />Second point (N):- (x<sub>2</sub>, y<sub>2</sub>)<br />Distance (MN):- &radic;((x<sub>2</sub>&nbsp;&ndash; x<sub>1</sub>)<sup>2</sup>&nbsp;+ (y<sub>2</sub>&nbsp;-y<sub>1</sub>)<sup>2</sup>)</p> <p>Example:-<br />M = (4, 8)<br />N = (12, 14)<br />Then distance between M and N is, MN = &radic;((12-4)<sup>2</sup>&nbsp;+ (14-8)<sup>2</sup>) = &radic;(64 + 36) = &radic;(100) = 10</p> <p>&nbsp;</p> <p>So we need to accept 4 inputs from the user. x1, y1, x2, y2</p> <p>Calculate the distance, and print the distance.</p> <p>In the example given here, the program must print</p> <p><span style=\"color: #339966;\"><strong>Dstance between the points is 10</strong></span></p> <p>&nbsp;</p> <p><span style=\"text-decoration: underline;\"><strong>Note</strong>: Pleaes use <a href=\"https://www.javatpoint.com/java-math-sqrt-method\">Math.sqrt</a> function to calculate the square root</span></p> <p>&nbsp;</p>"
                },
                {
                    "code":"exercise 4",
                    "desc":"<div>Write a program to print if a number is even or odd.</div> <div>&nbsp;</div> <div>A number is called an even number if it is divisible by 2. Example:- 4,8,12</div> <div>If it is not divisble by 2, it is called an odd number, Example:- 9,11</div> <div>&nbsp;</div> <div>So if the user inputs the nunber 12, the program must print</div> <div><span style=\"color: #339966;\"><strong>12 is an Even number</strong></span></div> <div>&nbsp;</div> <div>and if the user inputs number 13, the program must print</div> <div> <div><span style=\"color: #339966;\"><strong>13 is Odd number</strong></span></div> <div>&nbsp;</div> </div>"
                },
                {
                    "code":"exercise 5",
                    "desc":"<div>Write a program to evaluate if a number is perfect square or not.&nbsp;</div> <div>&nbsp;</div> <div>A perfect square is a number, which has a whole number as its square root</div> <div>Ref: <a href=\"https://www.javatpoint.com/java-math-sqrt-method\">Math.sqrt</a></div> <div>&nbsp;</div> <div>for example 16 is a perfect square, because its square root is 4, and 4 is a whole number</div> <div>&nbsp;</div> <div>on the other hand, 30 is not a perfect square, as its square root is 5.47, which is not a whole number</div> <div>&nbsp;</div> <div>so how do you find if a number is a perfect square or not?</div> <div>&nbsp;</div> <div>you will first take the square root of the number. Refer Math.sqrt</div> <div>&nbsp;</div> <div>so if the number is 30, its square root is 5.47</div> <div>&nbsp;</div> <div>now we get the integer part of this number, to get this we can use the function <a href=\"https://www.javatpoint.com/java-math-floor-method\">Math.floor</a>, and the integer part is 5</div> <div>&nbsp;</div> <div>now if the square root is bigger than the integer part, it is not a perfect square else it is a perfect square</div> <div>&nbsp;</div> <div>as 5.47 is greater than 5, we know 30 is not a perfect square</div> <div>&nbsp;</div> <div>if the user provided 30 as input, the program must print</div> <div><span style=\"color: #339966;\"><strong>30 is not a perfect square</strong></span></div> <div>&nbsp;</div> <div> <div>if the user provided 25 as input, the program must print</div> <div><span style=\"color: #339966;\"><strong>25 is a perfect square</strong></span></div> <div>&nbsp;</div> </div>"
                },
                {
                    "code":"exercise 6",
                    "desc":"<div>Write a program to evaluate if a number is a sunny number or not.</div> <div>&nbsp;</div> <div>If we increase a number by one, and if the new number is a perfect square, the number is said to be a sunny number</div> <div>&nbsp;</div> <div><span style=\"text-decoration: underline;\"><em>Clue: reuse the code we wrote when testing for a perfect square</em></span></div> <div>&nbsp;</div> <div>if the user provided 36 as input, the program must print</div> <div><span style=\"color: #339966;\"><strong>36 is not a sunny square</strong></span></div> <div>&nbsp;</div> <div> <div>if the user provided 24 as input, the program must print</div> <div><span style=\"color: #339966;\"><strong>24 is a sunny number</strong></span></div> <div>&nbsp;</div> </div>"
                },
                {
                    "code":"exercise 7",
                    "desc":"<div>Write a program to evaluate if a number is a nelson number or not.</div> <div>&nbsp;</div> <div>A number is known to be a nelson number, if it is divisble by 111</div> <div>&nbsp;</div> <div>if the user provided 222 as input, the program must print</div> <div><span style=\"color: #339966;\"><strong>222 is a nelson number</strong></span></div> <div>&nbsp;</div> <div> <div>if the user provided 121 as input, the program must print</div> <div><span style=\"color: #339966;\"><strong>121 is not a nelson number</strong></span></div> <div>&nbsp;</div> </div>"
                }
            ]
        },
        {
            "desc":"logical operations",
            "video":"https://s3.ap-southeast-1.amazonaws.com/www.sakhilearning.in/techbridge/videos/TeachBridge+Foundation+V01+Z1S4+Logical+Operations.mp4",
            "exercises":[
                {
                    "code":"exercise 1",
                    "desc":"<p><code><code></code></code></p> <div><strong>Write a program to print if a number is a buzz number.</strong></div> <div>&nbsp;</div> <div>A number is called a buzz number if it is divisible by 7 or it ends with 7.</div> <div>&nbsp;</div> <div>For example- 7, 17, 27, 37, 47 are buzz numbers because they end with 7. Similarly, the numbers 7, 14, 21, 28, 35, 49 are also buzz numbers because they are divisible by the number 7.</div> <div>&nbsp;</div> <div>So if the user gives 17 as input, the program must print</div> <div><span style=\"color: #339966;\"><strong>17 is a Buzz number</strong></span></div> <div>&nbsp;</div> <div>and if the user gives 23 as input, the program must print</div> <div><span style=\"color: #339966;\"><strong>23 is not a buzz number</strong></span></div> <div>&nbsp;</div> <p><code> </code></p>"
                },
                {
                    "code":"exercise 2",
                    "desc":"<p><code><code></code></code></p> <div>Write a program to check if a person is allowed to take a specific ride in an ammusement park.</div> <div>&nbsp;</div> <div>Age should be above 15 years, and if the age is above 45 years, but the person does not have any heart disease, the person is allowed</div> <div>&nbsp;</div> <div>Lets understand it with some examples</div> <div>&nbsp;</div> <div> <table style=\"border-collapse: collapse; width: 100%;\" border=\"1\"> <tbody> <tr> <td style=\"width: 33.3333%;\">Age</td> <td style=\"width: 33.3333%;\"> <p>0: no heart disease</p> <p>1: heart disease</p> </td> <td style=\"width: 33.3333%;\">Allowed</td> </tr> <tr> <td style=\"width: 33.3333%;\">14</td> <td style=\"width: 33.3333%;\">0</td> <td style=\"width: 33.3333%;\">no</td> </tr> <tr> <td style=\"width: 33.3333%;\">16</td> <td style=\"width: 33.3333%;\">1</td> <td style=\"width: 33.3333%;\">yes</td> </tr> <tr> <td style=\"width: 33.3333%;\">45</td> <td style=\"width: 33.3333%;\">1</td> <td style=\"width: 33.3333%;\">no</td> </tr> <tr> <td style=\"width: 33.3333%;\">45</td> <td style=\"width: 33.3333%;\">0</td> <td style=\"width: 33.3333%;\">yes</td> </tr> </tbody> </table> &nbsp;</div> <div>&nbsp;</div> <p><code> </code></p>"
                },
                {
                    "code":"exercise 3",
                    "desc":"<p><code><code></code></code></p> <div>Write a program that checks if the code provided by uesr is valid or not.</div> <div>&nbsp;</div> <div>A code is considered valid, if it is greater than or equal to 1000, and less than 10000</div> <div>&nbsp;</div> <div>and the number is divisible by either 3 or 5</div> <div>&nbsp;</div> <div><span style=\"text-decoration: underline;\">Note: Only a single if condition must be used</span></div> <div>&nbsp;</div> <div>For example, if the user gives 1305 as input, the program must print</div> <div><span style=\"color: #339966;\"><strong>your code is valid</strong></span></div> <div>&nbsp;</div> <div>and if the user provides 5627 as code, the program must print</div> <div><span style=\"color: #339966;\"><strong>invalid code, try again</strong></span></div> <div>&nbsp;</div> <div>&nbsp;</div> <p><code> </code></p>"
                },
                {
                    "code":"exercise 4",
                    "desc":"<p><code><code></code></code></p> <div>Write a program that checks if the code provided by uesr is valid or not.</div> <div>&nbsp;</div> <div>A code is considered valid, if it is greater than or equal to 1000, and less than 10000</div> <div>&nbsp;</div> <div>and the number is divisible by either <span style=\"text-decoration: underline;\">3 and 13</span> or <span style=\"text-decoration: underline;\">5 and 17</span></div> <div>&nbsp;</div> <div><span style=\"text-decoration: underline;\">Note: Only a single if condition must be used</span></div> <div>&nbsp;</div> <div>For example, if the user gives any of 3315/2613/6800 as input, the program must print</div> <div><span style=\"color: #339966;\"><strong>your code is valid</strong></span></div> <div>&nbsp;</div> <div>and if the user provides any of 595/975/6275 or as code, the program must print</div> <div><span style=\"color: #339966;\"><strong>invalid code, try again</strong></span></div> <div>&nbsp;</div> <div>&nbsp;</div> <p><code> </code></p>"
                },
                {
                    "code":"exercise 5",
                    "desc":"<p><code><code></code></code></p> <div>Write a program that checks if the code provided by uesr is valid or not.</div> <div>&nbsp;</div> <div>A code is considered valid, if it is not divisible by any of 3 or 17</div> <div>&nbsp;</div> <div><span style=\"text-decoration: underline;\">Note: Only a single if condition must be used</span></div> <div>&nbsp;</div> <div>For example, if the user gives any of 35/19 as input, the program must print</div> <div><span style=\"color: #339966;\"><strong>your code is valid</strong></span></div> <div>&nbsp;</div> <div>and if the user provides any of 15/34 or as code, the program must print</div> <div><span style=\"color: #339966;\"><strong>invalid code, try again</strong></span></div> <div>&nbsp;</div> <div>&nbsp;</div> <p><code> </code></p>"
                },
                {
                    "code":"exercise 6",
                    "desc":"<p>When mouseX is 173 and mouseY is 271, what will be the value of currentSquare?</p> <p>if (mouseX &lt; 200 &amp;&amp; mouseY &lt; 200) <br />{ <br />&nbsp; currentSquare = 1 <br />} <br />else <br />{ <br />&nbsp; if (mouseX &gt; 200 &amp;&amp; mouseY &lt; 200) <br />&nbsp; { <br />&nbsp; &nbsp; currentSquare = 4 <br />&nbsp; } <br />&nbsp; else <br />&nbsp; { <br />&nbsp; &nbsp; if (mouseX &lt; 200 &amp;&amp; mouseY &gt; 200) <br />&nbsp; &nbsp; { <br />&nbsp; &nbsp; &nbsp; currentSquare = 2 <br />&nbsp; &nbsp; } <br />&nbsp; &nbsp; else <br />&nbsp; &nbsp; { <br />&nbsp; &nbsp; &nbsp; if (mouseX &gt; 200 &amp;&amp; mouseY &gt; 200) <br />&nbsp; &nbsp; &nbsp; { <br />&nbsp; &nbsp; &nbsp; &nbsp; currentSquare = 3 <br />&nbsp; &nbsp; &nbsp; } <br />&nbsp; &nbsp; } <br />&nbsp; } <br />}</p>"
                },
                {
                    "code":"exercise 7",
                    "desc":"<p>what will be the output of this program? please explain why did the program got this output</p> <p>int x = 10;</p> <p>if ( x &gt; 15 || (x % 2) == 0 ) <br />{ <br />&nbsp; &nbsp;x = 90;<br />} <br /><br /></p> <p>System.out.println(x);</p> <p>&nbsp;</p>"
                },
                {
                    "code":"exercise 8",
                    "desc":"<p>what will be the output of this program? please explain why did the program got this output</p> <p>int x = 10;</p> <p>if ( x &gt; 15 || ( x%2==0 &amp;&amp; x/7&gt;1) ) <br />{ <br />&nbsp; &nbsp;x = 90;<br />} <br /><br /></p> <p>System.out.println(x);</p> <p>&nbsp;</p>"
                },
                {
                    "code":"exercise 9",
                    "desc":"<p>what will be the output of this program? please explain why did the program got this output</p> <p>int x = 10;</p> <p>if ( (x &lt; 15 || x/7&gt;1) &amp;&amp; x%2==0 )<br />{ <br />&nbsp; &nbsp;x = 90;<br />} <br /><br /></p> <p>System.out.println(x);</p> <p>&nbsp;</p>"
                },
                {
                    "code":"exercise 10",
                    "desc":"<p>what will be the output of this program? please explain why did the program got this output</p> <p>int x = 10;</p> <p>if ( x &lt; 15 &amp;&amp; x/7&gt;1 &amp;&amp; x%2==0 )<br />{ <br />&nbsp; &nbsp;x = 90;<br />} <br /><br /></p> <p>System.out.println(x);</p> <p>&nbsp;</p>"
                }
            ]
        },
        {
            "desc":"Loops",
            "video":"https://s3.ap-southeast-1.amazonaws.com/www.sakhilearning.in/techbridge/videos/TeachBridge+Foundation+V01+Z1S5+Loops.mp4",
            "exercises":[
                {"code":"exercise 1","desc":"<p>Write a program to reverse a number.</p> <p>For example if the user gives 7835 as input, the program must print 5378 as output</p> <p>Here is one of the logic to do this processing</p> <p>1) Take a number<br />2) Declare a temporary variable and initialize it with 0<br />3) find the last digit of the number (use % operator)<br />4) multiply the temporary variable by 10<br />5) add that last digit to the temporary variable<br />6) remove the last digit of the number (use integer division, divide by 10).<br />7) Repeat this process from 3 to 6 until the number becomes 0.</p> <p>&nbsp;</p>"},
                {"code":"exercise 2","desc":"<p>Find Factors of a Number</p> <p>A number which divides completely the number &ldquo;N&rdquo; is called the factor of the number &ldquo;N&rdquo;. For example:- the numbers 1, 2, 3, 4, 6 and 12 are complete divides the number 12 so they are called the factor of 12. Completly divisible means when we divide the number then it gives result zero.</p> <p>To find the factor of a positive number &ldquo;N&rdquo; divide that number using natural numbers 1 to &ldquo;N&rdquo;. If the number is divisible by the natural number then that natural number is the factor. A number N can have factors only in between 1 to N.</p> <p>Steps to find the factors of a number:-<br />1) Take a number N as input<br />2) Take an iterator variable and initialize it with 1<br />3) Dividing the number N with an iterator variable<br />4) If it is divisible then it is a factor of the given number N<br />5) Increase the iterator variable<br />6) Repeat the 4 and 5 steps until the iterator variable becomes equal to N.</p> <p>&nbsp;</p>"},
                {"code":"exercise 3","desc":"<p>Find LCM of Two Numbers</p> <p>Least or lowest common multiple (LCM) of two integers a and b is the smallest positive number that is divisible by both a and b. Example:- LCM of 12 and 15 is 60 because 60 is divisible by both 12 and 15.</p> <p>Procedure to find the lcm of two numbers,<br />1) Take two numbers<br />2) Find the smallest and largest number among them<br />3) Take a temporary variable&nbsp;<code class=\" prettyprinted\"><em><strong><span class=\"pln\">minMultiple</span></strong></em></code><br />4) Initialize&nbsp;<em><code class=\" prettyprinted\"><strong><span class=\"pln\">minMultiple</span></strong></code></em>&nbsp;with the smallest number<br />5) Divide variable&nbsp;<em><code class=\" prettyprinted\"><strong><span class=\"pln\">minMultiple</span></strong></code></em>&nbsp;by largest Number<br />6) If it is divisible by the largest number then it is the lcm of both numbers<br />7) Else increase the&nbsp;<em><code class=\" prettyprinted\"><strong><span class=\"pln\">minMultiple</span></strong></code></em>&nbsp;variable with the smallest number<br />8) Repeat 5 to 7 process until getting the result</p>"},
                {"code":"exercise 4","desc":"<p>Find the HCF or GCD of two numbers.</p> <p>The highest common factor (HCF) of two or more numbers is the greatest number which divides each of them exactly. Greatest Common Measure(GCM) and Greatest Common Divisor(GCD) are the other terms used to refer to HCF.</p> <p>Example: HCF of 60 and 75 = 15 because 15 is the highest number which divides both 60 and 75 exactly.</p> <p>Procedure to find the HCF or GCD of two numbers,<br />1) Take two numbers<br />2) Declare a temporary variable&nbsp;<code class=\" prettyprinted\"><em><strong><span class=\"pln\">hcf</span></strong></em></code>&nbsp;to store the HCF value<br />3) Take an iterator variable and initialize it with 1 i.e.&nbsp;<code class=\" prettyprinted\"><strong><em><span class=\"pln\">i</span><span class=\"pun\">=</span><span class=\"lit\">1</span></em></strong></code><br />4) Check both numbers are divisible by iterator variable (i) or not?<br />5) If yes then&nbsp;<code class=\" prettyprinted\"><strong><em><span class=\"pln\">hcf&nbsp;</span><span class=\"pun\">=</span><span class=\"pln\">&nbsp;i</span></em></strong></code><br />6) Increase the iterator variable by 1<br />7) Repeat 4 to 6 step until the iterator variable is less than both numbers</p>"},
                {"code":"exercise 5","desc":"<p>Find the factorial of a number</p> <p>The factorial of a positive integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example:- The factorial of 4= 4! = 4*3*2*1 or 1*2*3*4 = 24</p> <p>The factorial of a negative number doesn&rsquo;t exist. The value of 0! is 1, according to the convention for an empty product.</p> <p>Procedure to find the factorial of a number in Java,</p> <div class=\"code-block code-block-1\">&nbsp;</div> <p>1) Take a number<br />2) Declare a temporary variable&nbsp;<code class=\" prettyprinted\"><em><span class=\"pln\">fact</span></em></code>&nbsp;and initialize it with 1.&nbsp;<em><code class=\" prettyprinted\"><span class=\"kwd\">long</span><span class=\"pln\">&nbsp;fact&nbsp;</span><span class=\"pun\">=</span><span class=\"pln\">&nbsp;</span><span class=\"lit\">1</span><span class=\"pun\">;</span></code></em><br />3) Take an iterator variable&nbsp;<code class=\" prettyprinted\"><em><span class=\"pln\">i</span></em></code>, starting from 1<br />4) Multiply fact variable and iterator variable. Store the result into fact variable.&nbsp;<code class=\" prettyprinted\"><em><span class=\"pln\">fact&nbsp;</span><span class=\"pun\">=</span><span class=\"pln\">&nbsp;fact&nbsp;</span><span class=\"pun\">*</span><span class=\"pln\">&nbsp;i</span><span class=\"pun\">;</span></em></code><br />5) Increase the iterator variable by 1.<br />6) Repeat 4 and 5 steps until the iterator variable is less than the given number.</p> <p>&nbsp;</p>"},
                {"code":"exercise 6","desc":"<p>Print the sum of all the digits of a given number</p> <p>Example of the sum of digits of an integer number:- 54321 = 5+4+3+2+1 = 15</p> <p>Procedure to find the sum of digits of a given integer number,</p> <ol> <li>Take a number</li> <li>Declare two variables:-&nbsp;<em><code>lastDigit</code></em>&nbsp;and&nbsp;<code><em>sum</em></code></li> <li>Initialize the sum variable with 0</li> <li>Find the last digit of the number,&nbsp;<code><em>lastDigit&nbsp;=&nbsp;number%10</em></code></li> <li>Add the value of&nbsp;<code><em>lastDigit</em></code>&nbsp;to the variable&nbsp;<code><em>sum</em></code></li> <li>Remove the last digit of the number.&nbsp;<code><em>number&nbsp;=&nbsp;number/10</em></code></li> <li>Repeat 4 to 6 steps until the number does not become 0</li> </ol>"},
                {"code":"exercise 7","desc":"<p>Calculate the sum of n natural numbers</p> <p>Sum of natural number N as given as sum = 1+2+3+&hellip;.+N</p> <p>Examples:-<br />1+2+3+4+5 = 15<br />1+2+3+4+5+6+7+8+9+10 = 55</p> <p>Procedure to develop a method to find the sum of N natural numbers in Java,</p> <ol> <li>Take the N value.</li> <li>Declare an iterator variable and initialize it with 1 because natural numbers start with 1.</li> <li>Add iterator variable value into the sum variable</li> <li>Increase the value of the iterator variable by 1</li> <li>Repeat 3 and 4 steps until the number remains greater than the iterator variable</li> </ol>"},
                {"code":"exercise 8","desc":"<p>Find the sum of even digits in a given number.</p> <p>Procedure to find the sum of even digits in a given number,</p> <ol> <li>Take a number</li> <li>Declare a variable&nbsp;<code><em>evenDigitSum</em></code>&nbsp;to store the sum value and initialize it with 0</li> <li>Find the last digit of the number</li> <li>Check that the last digit is even or not</li> <li>If it even then adds it to&nbsp;<code><em>evenDigitSum</em></code>&nbsp;variable, else go to next step</li> <li>Remove the last digit of the number</li> <li>Repeat 3 to 6 steps until the number becomes 0</li> </ol> <p><strong>NOTE:</strong> Yo have developed a program earlier to find if a number is even or odd. If needed create a function that checks a number and returns true if the number is even, and false if the number is odd. And use that function here.</p>"},
                {"code":"exercise 9","desc":"<p>Find the sum of odd digits in a given number.</p> <p>Example:- Number = 12345<br />Then the odd digits in a given number are 1, 3, 5 and therefore sum of odd digits = 1 + 3 + 5 = 9</p> <p>Procedure to calculate the sum of odd digits in a number,</p> <ol> <li>Take a number</li> <li>Declare a variable&nbsp;<code><em>oddDigitSum</em></code>&nbsp;to store the sum value and initialize it with 0.</li> <li>Find the last digit of the number</li> <li>Check that the last digit is odd or not</li> <li>If it is odd then add it to&nbsp;<code><em>oddDigitSum</em></code>&nbsp;variable, else go to next step</li> <li>Remove the last digit of the number</li> <li>Repeat the 3 to 6 steps until the number becomes 0.</li> </ol> <p><strong>NOTE:</strong> Yo have developed a program earlier to find if a number is even or odd. If needed create a function that checks a number and returns true if the number is even, and false if the number is odd. And use that function here.</p>"},
                {"code":"exercise 10","desc":"<p>Write a program to find the sum of the first and last digit of a number.</p> <p>Example:-<br />Number = 12345<br />The first digit = 1, last digit = 5<br />Sum of first and last digits = 1 + 5 = 6</p> <ul> <li>Take a number</li> <li>Declare sum variable and initialize it with 0</li> <li>Find the last digit. To find the last digit we can use % operator. The expression&nbsp;<code><strong>number%10</strong></code>&nbsp;gives the last digit of the number.</li> <li>if number is less than 10, print the number and exit the program</li> <li>else find the first digit of the program <ul> <li>Find the total number of digits in the given number</li> <li>Divide the number by&nbsp;<code><strong>10^(total_number_of_digits-1)</strong></code>, it will give the first digit of the number.</li> </ul> </li> <li>Add first and the last digit to the sum variable.</li> <li>Print sum</li> </ul>"},
                {"code":"exercise 11","desc":"<p>Find the sum of digits until the single digit</p> <p>Example:- number = 123456<br />=&gt; The sum of digits of 123456 = 1+2+3+4+5+6 = 21<br />=&gt; The number 21 is of two digits number so again we will find the sum of digits of the number,<br />=&gt; The sum of digits of 21 = 2+1 = 3<br />Now, 3 is single-digit so it is the digital sum of the number 123456.</p>"},
                {"code":"exercise 12","desc":"<p>Given a number \"<strong>n</strong>\" find the sum of following series</p> <p>series:- 1 + 1/(2*2) + 1/(3*3) + 1/(4*4) + &hellip;.. + 1/(n*n)</p> <p>So for \"n\" = 5<br />Sum of Series should be = 1.46361</p> "},
                {"code":"exercise 13","desc":"<p><strong>&nbsp;Display the given below full diamond pattern of stars</strong></p> <hr /> <p>&nbsp;</p> <p><span class=\"pun\">&nbsp; &nbsp; &nbsp; *</span></p> <p><span class=\"pun\">&nbsp; &nbsp; ***</span></p> <p><span class=\"pun\">&nbsp; *****</span></p> <p><span class=\"pun\">&nbsp;*******</span></p> <p><span class=\"pun\">*********</span></p> <p><span class=\"pun\">&nbsp;*******</span></p> <p><span class=\"pun\">&nbsp; *****</span></p> <p><span class=\"pun\">&nbsp; &nbsp;***</span></p> <p><span class=\"pun\">&nbsp; &nbsp; *</span></p> <p>&nbsp;</p> <hr />"},
                {"code":"exercise 14","desc":"<p><strong>&nbsp;Display the given below pattern of stars</strong></p> **********<br> ****&nbsp;&nbsp;****<br> ***&nbsp;&nbsp;&nbsp;&nbsp;***<br> **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<br> *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*<br> **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**<br> ***&nbsp;&nbsp;&nbsp;&nbsp;***<br> ****&nbsp;&nbsp;****<br> **********<br> "},
                {"code":"exercise 15","desc":"<p><strong>&nbsp;Display the given below pattern of numbers</strong></p>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     1<br> &nbsp;&nbsp;&nbsp;&nbsp;    123<br> &nbsp;&nbsp;&nbsp;   12345<br> &nbsp;&nbsp;  1234567<br> &nbsp; 123456789<br> &nbsp;&nbsp;  1234567<br> &nbsp;&nbsp;&nbsp;   12345<br> &nbsp;&nbsp;&nbsp;&nbsp;    123<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     1<br>"},
                {"code":"exercise 16","desc":"<p><strong>&nbsp;Display the given below pattern of numbers</strong></p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0<br> &nbsp;&nbsp;&nbsp;&nbsp;010<br> &nbsp;&nbsp;&nbsp;01210<br> &nbsp;&nbsp;0123210<br> &nbsp;012343210<br> 01234543210<br> &nbsp;012343210<br> &nbsp;&nbsp;0123210<br> &nbsp;&nbsp;&nbsp;01210<br> &nbsp;&nbsp;&nbsp;&nbsp;010<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0<br>"},
                {"code":"exercise 17","desc":"<p><strong>&nbsp;Display the given below pattern of stars</strong></p><br> &nbsp&nbsp&nbsp&nbsp&nbsp*<br> &nbsp&nbsp&nbsp&nbsp*&nbsp*<br> &nbsp&nbsp&nbsp*&nbsp&nbsp&nbsp*<br> &nbsp&nbsp*&nbsp&nbsp&nbsp&nbsp&nbsp*<br> &nbsp*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br> *&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br> &nbsp*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br> &nbsp&nbsp*&nbsp&nbsp&nbsp&nbsp&nbsp*<br> &nbsp&nbsp&nbsp*&nbsp&nbsp&nbsp*<br> &nbsp&nbsp&nbsp&nbsp*&nbsp*<br> &nbsp&nbsp&nbsp&nbsp&nbsp*<br>"},
                {"code":"exercise 18","desc":"<p><strong>Print a pascal triangle</strong></p> <p>You can refer to the algorithm, and flow chart on this <a href=\"https://www.codewithc.com/pascals-triangle-algorithm-flowchart/\" target=\"popup\">page</a></p>"},
                {"code":"exercise 19","desc":"<p><strong>Write a program to print a star pattern like this</strong></p> <p><strong><span class=\"pun\">*</span> </strong></p> <p><strong><span class=\"pun\">*</span> <span class=\"pun\">*</span> </strong></p> <p><strong><span class=\"pun\">*</span> <span class=\"pun\">*</span> <span class=\"pun\">*</span> </strong></p> <p><strong><span class=\"pun\">*</span> <span class=\"pun\">*</span> <span class=\"pun\">*</span> <span class=\"pun\">*</span> </strong></p> <p><strong><span class=\"pun\">*</span> <span class=\"pun\">*</span> <span class=\"pun\">*</span> <span class=\"pun\">*</span> <span class=\"pun\">*</span></strong></p> <p>&nbsp;</p>"},
                {"code":"exercise 20","desc":"<p><strong>Write a program to check the prime number</strong></p> <p><strong>A natural number which has only two factors ( 1 and itself ) is called a prime number.</strong>&nbsp;For example- 5 is a prime number because it has only two factors 1 and 5. Similarly, 9 is not a prime number because it has more than 2 factors that are 1,3, and 9.</p> <p><a href=\"https://www.ishwaranand.com/2020/10/algorithm.html\"  target=\"popup\">You can use this flowchart for reference</a></p>"},
                {"code":"exercise 21","desc":"<p><strong>Write a program to check if the two numbers given are twin prime numbers</strong></p> <p>A pair of prime numbers having a difference of 2 is called twin prime numbers<strong>. Example of prime twin are:- (3,5), (5,7), (11,13) e.t.c.</strong></p> <p><strong>Note:</strong> <span style=\"text-decoration: underline;\">reuse the code that you developed earlier to check if a number is prime number or not</span></p> <p>&nbsp;</p>"},
                {"code":"exercise 22","desc":"<p><strong>Write a program to check if a given number is a magic number or not</strong></p> <p>A number is said to be a magic number if the sum of its digits is calculated till a single digit recursively by adding the sum of the digits after every addition. If the single-digit comes out to be 1, then the number is a magic number.&nbsp;Example of magic numbers are:- 10, 19, 28, 55, 1234 e.t.c.</p> <p><strong>1054</strong>&nbsp;= 1 + 0 + 5 + 4 = 10 (It is 2 digit number, so again find the sum of digits)<br />10 = 1 + 0 = 1 (finally sum of digits is 1)<br />Hence 1054 is a magic number.</p> <p>Similarly,<br /><strong>25417</strong>&nbsp;= 2 + 5 + 4 + 1 + 7 = 19 (Since it is a two digit number)<br />19 = 1 + 9 = 10 (Again it is two digit number)<br />10 = 1 + 0 = 1 (finally sum of digits is 1)<br />Hence 25417 is a magic number.</p> "},
                {"code":"exercise 23","desc":"<p><strong>Write a program to check if a given number is a Armstrong number or not</strong></p> <p>A positive integer is called Armstrong number of order n if,&nbsp;abcd&hellip;. =&nbsp;a<sup>n</sup>&nbsp;+&nbsp;b<sup>n</sup>&nbsp;+&nbsp;c<sup>n</sup>&nbsp;+&nbsp;d<sup>n</sup>&nbsp;+&nbsp;&hellip;.</p> <p>For Example :-&nbsp;</p> <p><strong>153 = </strong>1<sup>3</sup>&nbsp;+&nbsp;5<sup>3</sup>&nbsp;+&nbsp;3<sup>3</sup>&nbsp;= 1 + 125 + 27 = 153<br />So, 153 is an Armstrong number of order 3.</p> <p><strong>4150</strong>&nbsp;=&nbsp;4<sup>5</sup>&nbsp;+&nbsp;1<sup>5</sup>&nbsp;+&nbsp;5<sup>5</sup>&nbsp;+&nbsp;0<sup>5</sup>&nbsp;= 1,024 + 1 + 3,125 + 0 = 4150<br />So, 4150 is an Armstrong number of order 5</p>"},
                {"code":"exercise 24","desc":"<p><strong>Write a program to check if a given number is a palindrome number or not</strong></p> <p><strong><em>Palindrome number</em></strong>:-&nbsp;If the Reverse of a number is equal to the same number then the number is called palindrome number.</p> <p>Example of palindrome number:-<br /><strong>5225</strong>&nbsp;= 5225 So, 5225 is a palindrome number.<br />123 = 321 So, 123 is&nbsp;<strong>not</strong>&nbsp;a palindrome number.</p>"},
                {"code":"exercise 25","desc":"<p><strong>Write a program to check if a given number is a Perfect number or not</strong></p> <p><strong>Perfect number</strong>:- A number whose factors sum except itself, is equal to the same number is called a Perfect number<span id=\"div-gpt-ad-knowprogram_com-box-3-0\" class=\"ezoic-ad ezfound\" data-google-query-id=\"CLW56IKmn_UCFdEdcgodcPoBVw\"></span></p> <p>Example:-&nbsp;<strong>6</strong><br />Factors of 6 (except itself) are 1,2,3.<br />The Sum of these factors 1+2+3 = 6 So, 6 is a Perfect number.</p> <p>Another example:-&nbsp;<strong>28</strong><br />Factors of 28 (except itself) are 1, 2, 4, 7, 14<br />The sum of factors of 28 = 1+2+4+7+14 = 28<br />Hence, 28 is also a perfect number.</p> <p>&nbsp;</p>"},
                {"code":"exercise 26","desc":"<div> <div><strong>Write a program to check if a given number is a Spy number or not</strong></div> </div> <p><strong>Spy Number</strong>: A number whose sum of the digits of is equal to the product of its digits is called Spy number.</p> <p>Example:-&nbsp;<strong>132</strong><br />The sum of digits = 1 + 3 + 2 = 6<br />The product of the digits = 1 * 3 * 2 = 6<br />Hence, 132 is a spy number.</p> <p>Similarly,&nbsp;<strong>1124</strong>&nbsp;is also a spy number.<br />The sum of digits = 1 + 1 + 2 + 4 = 8<br />The product of the digits = 1 * 1 * 2 * 4 = 8</p> "},
                {"code":"exercise 27","desc":"<div> <div><strong>Write a program to check if a given number is a Tech numberor not</strong></div> </div> <p><strong>Tech number:</strong> A number which has an even number of digits, and when the number of digits split into two halves then the square of the sum of those halves is equal to the same number, is called Tech number.</p> <p>Example of Tech number:-<br /><strong>2025</strong><br />Number of digits = 4 (even)<br />Split 2025 into two halves, then<br />first half = 20<br />second half = 25<br />sum of the halves = 20+25 = 45<br />square of the sum of the halves = 45*45 = 2025</p> <p>Hence&nbsp;<strong>2025 is a tech number.</strong>&nbsp;Another examples of tech number are:-&nbsp;<strong>81, 2025, 3025, 9801, 494209, 998001</strong></p>"},
                {"code":"exercise 28","desc":"<div> <div><strong>Write a program to check if a given number is a Automorphic numberor not</strong></div> </div> <p><strong>Automorphic number:</strong>A number is called an Automorphic number if the square of the number ends with the same number.&nbsp;</p> <p>Example of&nbsp;<a href=\"https://en.wikipedia.org/wiki/Automorphic_number\" target=\"_blank\" rel=\"noreferrer noopener nofollow\">Automorphic numbers</a>&nbsp;are:-&nbsp;5, 6, 25, 76, e.t.c..</p> <p>The square of 6 = 36<br />The number 36 ends with 6 so it is an automorphic number.</p> <p>Similarly, the square of the number 76 = 5776<br />Here the 5776 ends with 76 so, 76 is an automorphic number.</p> <p>&nbsp;</p>"},
                {"code":"exercise 29","desc":"<div> <div><strong>Write a program to check if a given number is a Krishnamurthy number or not</strong></div> </div> <p><strong>Krishnamurthy number: </strong>If the sum of the factorial of all digits of a number is equal to the original number then the number is called Krishnamurthy Number.</p> <p>For example-&nbsp;<strong>145 and 40585 are Krishnamurthy numbers.</strong>&nbsp;</p> <p>1 and 2 are also Krishnamurthy numbers because their factorials are equal to the same number.</p> <p>145<br />=&gt; 1! + 4! + 5!<br />=&gt; 1 + 24 + 120<br />=&gt; 145</p> <p>The sum of the factorial of individual digits is the same as the original number 145. Hence, 145 is a Krishnamurthy number.</p> <p>Similarly,<br />40585<br />=&gt; 4! + 0! + 5! + 8! + 5!<br />=&gt; 24 +1 + 120 + 40320 + 120<br />=&gt; 40585</p> <p>1! = 1<br />So, 1 is a Krishnamurthy number.</p> <p>Similarly,<br />2! = 1*2 = 2<br />2 is also a Krishnamurthy number.</p> <p>Hence the numbers 1, 2, 145 and 40585 are Krishnamurthy number.</p> <p>&nbsp;</p> <p>&nbsp;</p>"},
                {"code":"exercise 30","desc":"<div> <div><strong>Write a program to check if a given number is a disarium&nbsp;number or not</strong></div> </div> <p><strong>Disarium number: </strong>A number whose sum of its digits powered with their respective position is equal to the original number is called disarium number.&nbsp;</p> <p>Examples of disarium numbers are- 135, 175, 518 and e.tc.</p> <p>Number = 89 =&gt; 8<sup>1</sup>&nbsp;+ 9<sup>2</sup>&nbsp;= 8 + 81 = 89 So, 89 is a disarium number.&nbsp;</p> <p>Number = 135 =&gt; 1<sup>1</sup>&nbsp;+ 3<sup>2</sup>&nbsp;+ 5<sup>3</sup>&nbsp;= 1 + 9 + 125 = 135 Hence 135 is a disarium number.<code class=\" prettyprinted\"></code></p> <p><code class=\" prettyprinted\"></code>Number = 518 =&gt; 5<sup>1</sup>&nbsp;+ 1<sup>2</sup>&nbsp;+ 8<sup>3</sup>&nbsp;= 5 + 1+ 512 = 518 So, 518 is a disarium number.</p> <p>&nbsp;</p>"},
                {"code":"exercise 31","desc":"<div> <div><strong>Write a program to check if a given number is a pronic&nbsp;number or not</strong></div> </div> <p><strong>Pronic number:</strong>A pronic number is a number which is the product of two consecutive integers, that is, a number of the form n(n + 1).&nbsp;</p> <p>The first few Pronic numbers are::- 0, 2, 6, 12, 20, 30, 42, 56, 72, 90, 110, 132, 156, 182, 210, 240, 272, 306, 342, 380, 420, 462 &hellip;</p> <p>0 = 0 * (0+1)</p> <p>2 = 1 * (1+1)</p> <p>6 = 2 * (2+1)</p> <p>12 = 3 * (3+1)</p> <p>20 = 4 * (4+1)</p> <p>30 = 5 * (5+1)</p> <p>42 = 6 * (6+1)</p> <p>56 = 7 * (7+1)</p> "},
                {"code":"exercise 32","desc":"<div> <div><strong>Write a program to check if a given number is a duck number or not</strong></div> </div> <p><strong>duck number</strong>: A number that has at least one 0 is called a duck number</p> <p>Example of the duck number:-<br />102350 is a duck number.<br />123 is not a duck number.<br />78050 is a duck number.</p>"},
                {"code":"exercise 33","desc":"<div> <div><strong>Write a program to check if a given number is a harshad number or not</strong></div> </div> <p><strong>harshad number</strong>: A number that is completely divisble by sum of digits is called a harshad number</p> <p>9 is a harshad number</p> <p>11 is not a harshad number</p> <p>378 is a Harshad number</p>"},
                {"code":"exercise 34","desc":"<div> <div><strong>Write a program to check if a given number is a kaprekar number or not</strong></div> </div> <p><strong>kaprekar number</strong>: <strong>A number whose square divided into two parts (none of the parts have only 0) and the sum of the parts is equal to the original number then it is called kaprekar number.</strong></p> <p>Example of kaprekar numbers:-&nbsp;<strong>45</strong></p> <p>The square of 45 = 2025</p> <p>20 + 25 = 45, so&nbsp;<strong>45 is a kaprekar number.</strong></p> <p>10, 100 are not a kaprekar number</p> <p>10^2 = 100 =&gt; 10 + 0= 10</p> <p>100^2 = 10000 = 100 + 00 = 100</p> <p>But the condition is&nbsp;<strong>none of the part having only 0</strong>, so these are not the kaprekar number.</p> "},
                {"code":"exercise 35","desc":"<p><span style=\"font-weight: 400;\">Given a number N. Replace all zeros in the number with 5 and return the number.</span></p> <p><span style=\"font-weight: 400;\">For example if the number provided by user is <strong>240010</strong>, than the program should print <strong>245515</strong></span></p> <p>&nbsp;</p>"},
                {"code":"exercise 36","desc":"<p><span style=\"font-weight: 400;\">Print a arithmetic series of N terms, given the first term, and the difference</span></p> <p>An arithmetic sequence is represented like this: {a, a+d, a+2d, a+3d, ... }</p> <p>Here&nbsp;</p> <ul> <li><strong>a</strong>&nbsp;is the first term, and</li> <li><strong>d</strong>&nbsp;is the difference between the terms (called the&nbsp;<strong>\"common difference\"</strong>)</li> </ul> <p>So if the first term is 5 (a) and the difference is 3, and we need to print 6 terms (N)</p> <p>We will print</p> <p>5 8 11 14 17 20</p> <p>&nbsp;</p>"}                            ]
        }
    ]
}

function appendDescription(description)
{
    // Create an "li" node:
    const node = document.createElement("div");
    node.style.background = 'DarkBlue';
    node.style.color = 'white';
    node.style.fontSize = "40px";

    // Create a text node:
    const textnode = document.createTextNode(description);

    // Append the text node to the "li" node:
    node.appendChild(textnode);

    // Append the "li" node to the list:
    mylist.appendChild(node);
}
function appendLesson(lesson)
{
    const video = document.createElement('video');
    video.src =lesson;
    video.controls = true;
    video.muted = false;
    video.height = 400; // in px
    video.width = 480; // in px
  
    mylist.appendChild(video);

}
function appendExercise(ex)
{

   // Create an "li" node:
   const node1 = document.createElement("div");

   // Create a text node:
   const textnodeCode = document.createTextNode(ex.code.toUpperCase());
   node1.style.fontSize = '25px';

   // Append the text node to the "li" node:
   node1.appendChild(textnodeCode);




    // Create an "li" node:
    const node = document.createElement("div");

    // Create a text node:
    const textnodeDesc = document.createElement("div");
    textnodeDesc.innerHTML = ex.desc;

    textnodeDesc.style.background = 'black';
    textnodeDesc.style.color = 'white';

    node.appendChild(document.createElement("br"));
    node.appendChild(textnodeDesc);

    // Append the "li" node to the list:
    mylist.appendChild(node1);
    mylist.appendChild(node);
}

function appendAllExercises(exercises)
{
    let nExercises =     exercises.length;
	for (let i = 0; i < nExercises; i++) 
    {
        appendExercise(exercises[i]);
	}

}

function showSection(section)
{
    // Create an "li" node:
    const node = document.createElement("hr");
    // Append the "li" node to the list:
    mylist.appendChild(node);

    // append separator
    appendDescription(section.desc);
    appendLesson(section.video);
    appendAllExercises(section.exercises);
}

function showCourseContent()
{
    console.log("showCourseContent");
    let nSections =     mydata.sections.length;
	for (let i = 0; i < nSections; i++) 
    {
        showSection(mydata.sections[i]);
	}
};


$(document).ready(function () {
	showCourseContent();
	const zeroPad = (num, places) => String(num).padStart(places, '0')
	
	});
