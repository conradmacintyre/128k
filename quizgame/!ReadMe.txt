#################################################
#
#	QUIZ GAME -- INSTRUCTIONS / READ ME
#
#################################################

Hello! Welcome to Quiz Game! It is quick and easy
to customize the game with your own questions, 
colours and backgorund images.


#####  CONTROLLING THE GAME  ####################

Press ? to bring up the on-screen manual.

Press N to advance to the next question.

Press A, B, C, or D to guess the correcponding
answer.


#####  CUSTOMIZE QUIZ  ##########################

You can create and load quizzes via .txt files. 
As long as the files are formatted correctly. In 
case you are curious, the formatting is called 
JSON.

The formatting is done with double-quoted 
key-value pairs, separated by a colon and all 
wrapped in curly braces. Duplicate the example 
conradtest.txt and use it as a template.

When editing, please only edit the right side 
(the "value").

The title will be displayed at the top of the 
game board in ALL CAPS, regardless of how you
capitalize the text in the value.

Colours can be text (black, lightblue, etc), HEX 
values, or RGB values -- as long as they are 
formatted according to the CSS spec.

Font can be any font, or comma-separated list of 
fonts.

Questions & Answers need to be formatted very 
specifically in order to load correctly. The 
whole thing is one big text string separated by
pipe characters ( | ). The first thing in the 
string is the question, then a pipe. Then the 
answer options, each separated by pipes.

NOTE -- The correct answer MUST start with an 
asterisk ( * ), otherwise all four answers will
be regarded as wrong.


#####  CUSTOMIZE BACKGROUND  ####################

Just drag and drop any image onto the quiz. Done.