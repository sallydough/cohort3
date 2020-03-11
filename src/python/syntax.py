
print("Hello, world!")

#---------------------------------
# VARIABLES: are containers for storing data values.
# Python has no command for declaring a variable.
x = "5"
_car_ = "Buddy"
fruitCup2 = ["1", 2, 3, 4, "Sally"]
print(fruitCup2, x, _car_)

# Global Variables: can be used by everyone, both inside of functions and outside.
# To create a global variable inside a function, you can use the 'global' keyword.
def _cats_():
    global x
    x = "Meow meow meow"
_cats_
print("Hello" + x)

#---------------------------------
# DATA TYPES
# Text Type:	str
# Numeric Types:	int, float, complex
# Sequence Types:	list, tuple, range
# Mapping Type:	dict
# Set Types:	set, frozenset
# Boolean Type:	bool
# Binary Types:	bytes, bytearray, memoryview

# Set DataType: dataTypeWord(variable)
_phone_ = str("Hello World")	
number = int(20)
search_item = dict(name="John", age=36)
print( _phone_, number, search_item)

# Retrieve Data Type: type()
w = "brother"
print(type(w))
#gives back '<type 'str'>'

#-------------------------------
# NUMBERS: int, float, complex

# int : whole number (+/-)
q = 12345
r = -8748392

# float : +/- number contains more than one decimal or e (power of 10)
s = 1.0
t = 1.34
v = -0.5432
w = 35e2

# complex : written with a "j" as the imaginary part
v = 5j

#---------------------------------
# STRING : use single / double quotations

# strings are arrays : can look up specific letter using 'print(variableName[indexNumber])'
_greeting_ = "What the fuck is up with you, my beautiful?"
print(_greeting_[7]) # will give you back 'e' in the word 'the'
#slice word: 
print(_greeting_[9:13]) # gives back 'fuck'
#Use negative indexes to start the slice from the end of the string:
print(_greeting_[-13:-1]) # returns 'my beautiful'

# multiverse string : use 3 single or double quotations
_longGreeting_ = '''Cruising the grooves of beatitude,
attitude pitched up a few latitudes, 
atta dude'''
print(_longGreeting_)
#String Length : returns the length of a string len()
len(_longGreeting_)

#format() method = insert numbers into string
_eyes_ = 2
teeth = 32
fingers = 19
body = "I lost {} eyes, swallowed {} teeth and grew {} fingers"
print(body.format(_eyes_, teeth, fingers))

#Other string methods: 
#strip() = removes unecessary space from string
#upper() = makes uppercase
#lower() = makes lowercase
#replace() = replaces a string with another string
_car_.replace("Buddy", "Nemesis")
#split() = splits the string into substrings
print(_phone_.split()) # returns ['Hello', ' World']

#---------------------------------
# BOOLEAN : evaluates whether expression is True or False
print(20 > 8 ) # True
print(45 == 0) # False
print(67 < 1) # False

#---------------------------------
# ARRAYS: 

#
if 5 > 2:
    print("goodbye my love")
# define attributes / variables
# number
# string
# boolean
# array
# dictionary / objects
# undefined
# sample if / else

# functions
# parameters
# returns

# arrays
# add to the front
# add to the end
# update values

# loops 
# for
# for/in
# while
# do while
# forEach (with array and function)


# Objects / Dictionaries
# declare object
# lookup key to retrieve value