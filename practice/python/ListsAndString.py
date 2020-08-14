# 201401254 박영준
# 인터넷응용 Assingment
# EX-2. Lists and String


######################################################################################
########################################  List  ######################################
######################################################################################

import sys


def test(did_pass):
    """  Print the result of a test.  """
    linenum = sys._getframe(1).f_lineno  # Get the caller's line number.
    if did_pass:
        msg = "Test at line {0} ok.".format(linenum)
    else:
        msg = ("Test at line {0} FAILED.".format(linenum))
    print(msg)


print("###############################################################")
print("############################ Lists ############################")
print("###############################################################\n")

# List - 1. What is the Python interpreter's response to the following?
print("List_Question # 1")
print(">>> list(range(10, 0, -2))")
print(list(range(10, 0, -2)))
print(">>> list(range(start, stop, step)) 정상적으로 출력되는 rule")
print(">>> rule(1) start < stop 이면 step은 0보다 커야한다.")
print(">>> rule(2) start > stop 이면 step은 0보다 작아야한다.")
print(">>> rule(3) start = stop 이면 step에 상관없이 출력 안됨.\n")

print("###############################################################\n")

# List - 2. Consider this fragment of code(Turtle)
print("List_Question # 2")
print(">>> 주어진 문제에서 turle 객체는 tess로 생성되었다")
print(">>> alex = tess 로 Assign하게 되면 같은 객체에 이름만 alex와 tess 2개가 된다.")
print(">>> 따라서 같은 객체에 여러 Name인 Aliase이기 때문에 alex와 tess 색은 같이 변한다.\n")

print("###############################################################\n")
"""
import turtle
tess = turtle.Turtle()
alex = tess
alex.color("hotpink")
tess.color("black")
alex.goto(0,100)
tess.goto(100,0)
turtle.mainloop()
"""

# List - 5. Lists can be used to represent mathematical vectors
print("List_Question # 5")
print(">>> 각 리스트의 인덱스를 합쳐서 하나의 리스트로 만들기")


def add_vectors(u, v):
    sum = []
    for x in range(len(u)):
        sum.append(u[x] + v[x])
    return sum


test(add_vectors([1, 2], [1, 4]) == [2, 6])
test(add_vectors([1, 1], [1, 1]) == [2, 2])
test(add_vectors([1, 2, 1], [1, 4, 3]) == [2, 6, 4])

print("\n###############################################################\n")

# List - 6. Write a function scalar_mult(s, v)
print("List_Question # 6")
print(">>> 첫번째 받은 수를 리스트 인덱스에 곱해서 반환하는 함수")


def scalar_mult(s, v):
    ans = []
    for i in range(len(v)):
        ans.append(s * v[i])
    return ans


test(scalar_mult(5, [1, 2]) == [5, 10])
test(scalar_mult(3, [1, 0, -1]) == [3, 0, -3])
test(scalar_mult(7, [3, 0, 5, 11, 2]) == [21, 0, 35, 77, 14])

print("\n###############################################################\n")

# List - 7. Write a function dot_product(u, v)
print("List_Question # 7")
print(">>> 두 리스트의 각 인덱스의 곱을 모두 더한 값 반환하는 함수")


def dot_product(u, v):
    sum = 0
    for i in range(len(u)):
        sum += u[i] * v[i]
    return sum


test(dot_product([1, 1], [1, 1]) == 2)
test(dot_product([1, 2], [1, 4]) == 9)
test(dot_product([1, 2, 1], [1, 4, 3]) == 12)

print("\n###############################################################\n")

# List - 8. Extra challenge for the mathematically inclined
print("List_Question # 8")
print(">>> 두개의 리스트 벡터의 내적을 리스트로 반환하는 함수 ")


def cross_product(u, v):
    x = u[1] * v[2] - u[2] * v[1]
    y = u[2] * v[0] - u[0] * v[2]
    z = u[0] * v[1] - u[1] * v[0]
    return [x, y, z]


test(cross_product([1, 2, 1], [1, 4, 3]) == [2, -2, 2])

print("\n###############################################################\n")

# List - 9. Describe the relationship between " ".join(song.split()) and song in the fragment of code below.
print("List_Question # 9")
print(">>> song과 .join(song.split())이 같은지 확인하고 설명")
song = "The rain in Spain..."
test(" ".join(song.split()) == song)
multi_line_string = """
song 과 .join(song.split())을 한 결과는 같다. .join(song.split())는
song.split()으로 song을 공백기준으로 나눠 만들어진 단어들로 List로 구성하고
" ".join()으로 그 단어들 사이에 공백을 넣고 다시 합쳐 문자열을 만드는 코드이다. 
그러므로 join을 사용할 때 공백 대신 다른 것을 넣고 단어들을 합쳐 문자열을 만들면 다른 결과를 반환한다.
"""
print(multi_line_string)
print("\n###############################################################\n")

# List - 10. Write a function replace(s, old, new) that replaces all occurrences of old with new in a string s
print("List_Question # 10")
print(">>> 첫번째 받은 인자의 문자열에서 두번째 받은 인자를 세번째 받은 인자로 대체하는 함수")


def replace(s, old, new):
    l = s.split(old)
    return new.join(l)


test(replace("Mississippi", "i", "I") == "MIssIssIppI")
s = "I love spom! Spom is my favorite food. Spom, spom, yum!"
test(replace(s, "om", "am") == "I love spam! Spam is my favorite food. Spam, spam, yum!")
test(replace(s, "o", "a") == "I lave spam! Spam is my favarite faad. Spam, spam, yum!")

print("\n###############################################################\n")

######################################################################################
#######################################  String  #####################################
######################################################################################


print("###############################################################")
print("########################### String ############################")
print("###############################################################\n")

# 이전 장의 테스트 스 캐 폴딩을 포함하는 단일 파일을 작성하고 테스트가 필요한
# 모든 기능을 해당 파일에 넣는 것이 좋습니다.

# String - 1. What is the result of each of the following:
print("String_Question # 1")
print(">>> What is the result of each of the following:\n")
print("Python"[1])  # answer = y
print("Strings are sequences of characters."[5])  # answer = g
print(len("wonderful"))  # answer = g
print("Mystery"[:4])  # answer = Myst
print("p" in "Pineapple")  # answer = True
print("apple" in "Pineapple")  # answer = True
print("pear" not in "Pineapple")  # answer = True
print("apple" > "pineapple")  # answer = False
print("pineapple" < "Peach")  # answer = False

print("\n###############################################################\n")

# String - 2. Modify:
print("String_Question # 2")
print(">>> Modify: so that Ouack and Quack are spelled correctly:\n")
prefixes = "JKLMNOPQ"
suffix = "ack"
for letter in prefixes:
    if letter == "O" or letter == 'Q':
        print(letter + 'u' + suffix)
    else:
        print(letter + suffix)

print("\n###############################################################\n")

# String - 3. Encapsulate:
# count_letters라는 함수에서 문자열과 문자를 인수로 받아들이도록 일반화하십시오.
# 대답을 인쇄하는 대신 함수가 문자 수를 반환하도록합니다. 발신자가 인쇄를해야합니다.
print("String_Question # 3")
print(">>> 함수에 문자열과 문자를 인수로 받아 해당 문자 수를 반환")
fruit = "banana"
char = "a"


def count_letters(letter, str):
    count = 0
    for char in letter:
        if char == str:
            count += 1
    return count


print("함수 호출 결과 : ", count_letters(fruit, char))

print("\n###############################################################\n")

# String - 4. count_letters function so that instead of traversing the string:
# 이제 count_letters 함수를 다시 작성하여 문자열을 탐색하는 대신 선택적인 세 번째
# 매개 변수를 사용하여 find 메소드를 반복적으로 호출하여 계산중인 문자의 새 항목을 찾습니다.
print("String_Question # 4")
print(">>> 3번째 인자를 사용해 find 메소드를 반복적으로 호출하여 계산")


# 3번째 파라미터를 글자로 받아서 반환하기
def count_letters(s, c, start=0):
    count = 0
    while 1:
        if s.find(c, start) == -1:
            break
        else:
            count += 1
            start = s.find(c, start) + 1
    return count


print(count_letters("banana", "a", start=0))

print("\n###############################################################\n")

# String - 5. Assign to a variable in your program a triple-quoted string
# 프로그램에서 텍스트의 좋아하는 단락을 포함하는 삼중 인용 문자열을 지정하십시오
# 예를 들어 시, 연설, 케이크를 구우려면 지침, 영감을주는 구절 등
#
# 문자열에서 모든 구두점을 제거하고 문자열을 단어 목록으로 분리하고 문자 "e"를 포함하는
# 텍스트의 단어 수를 계산하는 함수를 작성하십시오. 프로그램은 다음과 같이 텍스트 분석을 인쇄해야합니다.
# Your text contains 243 words, of which 109 (44.8%) contain an "e".
print("String_Question # 5")
print(">>> 문자열 구두점 제거 후 단어 목록으로 분리 -> 'e'를 포함하는 텍스트의 단어 수를 계산하는 함수")

import string

text = """Life improves slowly and wrong fast,
and only catastrophe is clearly visible....
I believe it """


def text_Analysis(s):
    text_NP = ""
    ecount = 0
    for letter in s:
        if letter not in string.punctuation:  # string의 모든 구두점을 제거
            text_NP += letter
    words = text_NP.split()
    for word in words:
        if 'e' in word:
            ecount += 1
    print('Your text contains {0} words, of which {1} ({2}%) contain an "e"'
          '.'.format(len(words), ecount, round(ecount / len(words) * 100, 1)))


text_Analysis(text)

print("\n###############################################################\n")

# String - 6. Print a neat looking multiplication table like this:
print("String_Question # 6")
print(">>> 깔끔하게 보이는 곱셈 테이블을 출력")

layout = "{0:>2}{1}{2:>6}{3:>4}{4:>4}{5:>4}{6:>4}{7:>4}" \
         "{8:>4}{9:>4}{10:>4}{11:>4}{12:>4}{13:>4}"

print(layout.format("", " ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"))
print("  :" + "-" * 50)
for i in range(1, 13):
    print(layout.format(i, ":", i * 1, i * 2, i * 3, i * 4, i * 5, i * 6, i * 7, i * 8, i * 9, i * 10, i * 11, i * 12))

"""
        1   2   3   4   5   6   7   8   9  10  11  12
  :--------------------------------------------------
 1:     1   2   3   4   5   6   7   8   9  10  11  12
 2:     2   4   6   8  10  12  14  16  18  20  22  24
 3:     3   6   9  12  15  18  21  24  27  30  33  36
 4:     4   8  12  16  20  24  28  32  36  40  44  48
 5:     5  10  15  20  25  30  35  40  45  50  55  60
 6:     6  12  18  24  30  36  42  48  54  60  66  72
 7:     7  14  21  28  35  42  49  56  63  70  77  84
 8:     8  16  24  32  40  48  56  64  72  80  88  96
 9:     9  18  27  36  45  54  63  72  81  90  99 108
10:    10  20  30  40  50  60  70  80  90 100 110 120
11:    11  22  33  44  55  66  77  88  99 110 121 132
12:    12  24  36  48  60  72  84  96 108 120 132 144
"""

print("\n###############################################################\n")

# String - 7. Write a function that reverses its string argument, and satisfies these tests:1
print("String_Question # 7")
print(">>> 문자열 인수를 반대로 출력시키는 함수 만들기")


def reverse(s):
    st = list(s)
    st.reverse()
    return "".join(st)


test(reverse("happy") == "yppah")
test(reverse("Python") == "nohtyP")
test(reverse("") == "")
test(reverse("a") == "a")

print("\n###############################################################\n")

# String - 8. Write a function that mirrors its argument:
print("String_Question # 8")
print(">>> 인자를 받으면 reverse된 문자를 더해서 출력하는 함수")


def mirror(s):
    st = list(s)
    st.reverse()

    return s + "".join(st)


test(mirror("good") == "gooddoog")
test(mirror("Python") == "PythonnohtyP")
test(mirror("") == "")
test(mirror("a") == "aa")

print("\n###############################################################\n")

# String - 9. Write a function that removes all occurrences of a given letter from a string:
print("String_Question # 9")
print(">>> 문자열에서 인자로 주어진 문자를 모두 제거하는 함수")


def remove_letter(c, s):
    s = list(s)
    i = 0
    for char in s:
        if char == c:
            del s[i]
        i += 1
    return "".join(s)


test(remove_letter("a", "apple") == "pple")
test(remove_letter("a", "banana") == "bnn")
test(remove_letter("z", "banana") == "banana")
test(remove_letter("i", "Mississippi") == "Msssspp")
test(remove_letter("b", "") == "")
test(remove_letter("b", "c") == "c")

print("\n###############################################################\n")

# String - 10. Write a function that recognizes palindromes:
print("String_Question # 10")
print(">>> 반복문자를 인식하는 함수를 작성하시오")


def is_palindrome(s):
    if len(s) % 2 == 0:
        return s[:len(s) // 2] == reverse(s[len(s) // 2:])
    else:
        return s[:len(s) // 2] == reverse(s[len(s) // 2 + 1:])


test(is_palindrome("abba"))
test(not is_palindrome("abab"))
test(is_palindrome("tenet"))
test(not is_palindrome("banana"))
test(is_palindrome("straw warts"))
test(is_palindrome("a"))
# test(is_palindrome(""))    # Is an empty string a palindrome?

print("\n###############################################################\n")

# String - 11. Write a function that counts how many times a substring occurs in a string:
print("String_Question # 11")
print(">>> 첫번째 인자의 문자열이 두번째 인자에 몇 번 있는지 계산하는 함수")


def count(subs, s, start=0):
    count = 0
    while 1:
        if s.find(subs, start) == -1:
            break
        else:
            count += 1
            start = s.find(subs, start) + 1
    return count


test(count("is", "Mississippi") == 2)
test(count("an", "banana") == 2)
test(count("ana", "banana") == 2)
test(count("nana", "banana") == 1)
test(count("nanan", "banana") == 0)
test(count("aaa", "aaaaaa") == 4)

print("\n###############################################################\n")

# String - 12. Write a function that removes the first occurrence of a string from another string:
print("String_Question # 12")
print(">>> 문자열의 첫 번째 항목을 다른 문자열에서 제거하는 함수")


def remove(subs, s):
    if s.find(subs) == -1:
        pass
    else:
        s = s[:s.find(subs)] + s[s.find(subs) + len(subs):]
    return s


test(remove("an", "banana") == "bana")
test(remove("cyc", "bicycle") == "bile")
test(remove("iss", "Mississippi") == "Missippi")
test(remove("eggs", "bicycle") == "bicycle")

print("\n###############################################################\n")

# String - 13. Write a function that removes all occurrences of a string from another string:
print("String_Question # 13")
print(">>> 문자열에서 인자로 주어진 문자를 모두 제거하는 함수")


def remove_all(subs, s):
    return s.replace(s[s.find(subs):s.find(subs) + len(subs)], "")


test(remove_all("an", "banana") == "ba")
test(remove_all("cyc", "bicycle") == "bile")
test(remove_all("iss", "Mississippi") == "Mippi")
test(remove_all("eggs", "bicycle") == "bicycle")

print("\n###############################################################\n")
