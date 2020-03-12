
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

# Set DataType: 'dataTypeWord'(value)
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

# LIST is a collection which is ordered and changeable. Allows duplicate members.
_list_ = ['bananas', 'apples', 'cheese']
print(_list_[1]) # to access item, refer to index number (will give back 'apples')
print(_list_[-1]) # negative indexing = will grab item from end of list ('cheese')
print(_list_[0:2]) # range indexing = specify index range from start to end range (does not incluse end range indexwhen returning)

# TUPLE is a collection which is ordered and unchangeable. Allows duplicate members.
# written with round brackets
# unchangable and immutable , cant change values
_tuple_ = ( "Carbohydrates", "Protein", "Fats", "Micronutrients")
print(_tuple_)

# SET is a collection which is unordered and unindexed. No duplicate members.
#  written with curly brackets
# to access item: use 'for in' loop because set is unordered
_set_ = {"sweet potatoes", "pickles", "overdue chicken"}
print(_set_)

# DICTIONARY/Object is a collection which is unordered, changeable and indexed. No duplicate members.
# Python dictionaries are written with curly brackets, and they have keys and values 
_dict_ = {
  "name": "Ford",
  "age": 123,
  "eye colour": "ruby"
}
print(_dict_)


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
# ===insert()	Adds an element at the specified position
# add to the end
# ===append() add element to end of list
# ====extend()	Add the elements of a list (or any iterable), to the end of the current list
# remove:
# ====pop() method to remove an element from the array.
# ===remove() method to remove an element from the array
# ===del() - deletes using index number item, or can delete whole list
# ===clear() = emptys list
# update values: change the value of a specific item, refer to the index number
["apple", "banana", "cherry"]
thislist[1] = "blackcurrant"
print(thislist)
# other methods for arrays:
#reverse()	Reverses the order of the list
# sort()	Sorts the list
# index()	Returns the index of the first element with the specified value
#clear()	Removes all the elements from the list
# copy() / list()	Returns a copy of the list
# count()	Returns the number of elements with the specified value

# loops 
# for
# for/in
# while
# do while
# forEach (with array and function)


# Objects / Dictionaries
# declare object
# lookup key to retrieve value