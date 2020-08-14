from urllib.request import urlopen
from bs4 import BeautifulSoup  # BeautifulSoup 는 class 명칭

# BeautifulSoup 라이브러리는 HTML 태그 등과 같은 Contents 를 가져와서
# 사용자가 파싱하기 쉽게 도와주는 라이브러리
# $ pip install beautifulsoup4
# html 파일 열기

# 기사의 목록 가져오기
url = "http://news.donga.com/List?m="
with urlopen(url) as f:
    donga = BeautifulSoup(f, "html.parser")
donga.find_all("span", class_='tit')

n = 1
count = 0
store_day = 0
running = 1
tit_all = []
word_text = 'output.txt'


def write_file(text):
    opened_file = open(word_text, 'a', encoding='UTF8')
    opened_file.write(text + '\n')
    opened_file.close()


while running:
    url = "http://news.donga.com/List?p=%d&prod=news&ymd=&m=" % n  # url
    with urlopen(url) as f:
        donga = BeautifulSoup(f, "html.parser")

    today = donga.find("span", class_='date')  # 오늘날짜
    today = int(today.string[8:10])
    date = donga.find_all("span", class_='date')
    date_list = []
    for i in date:
        date_list.append(int(i.string[8:10]))

    tit = donga.find_all("span", class_='tit')  # 기사 제목
    tit_list = []
    for i in tit:
        tit_list.append(i.string)  # string 으로 변경

    for i in range(len(date_list)):
        if store_day != date_list[i]:
            store_day = date_list[i]
            count += 1
            if count == 8:
                running = 0
        write_file(tit_list[i])

    n += 20
    print("I'm Running {}".format(n))

with open(word_text, 'r', encoding='UTF8') as f:
    page = f.read()


words_list = page.split()  # words_list 로 정리된 page 내용 넣기

# translate, maketrans 함수 이용해 본문 Text 처리
in_tab = "…!\"”#$%&()*+,-./:;<=>?@[]^_`{|}~'\\"
out_tab = "                                  "
tran_tab = str.maketrans(in_tab, out_tab)  # 텍스트에 문자 변환
trans_list = []

for word in words_list:
    word = word.translate(tran_tab)
    if word.strip() == '':
        continue
    trans_list.append(word.strip())  # trans_list 에 변환된 문자 삽입


# list_param 에서 단어의 사용 빈도를 count 해서 dict 으로 반환
def count(list_param, dict_param):
    for wd in list_param:
        if wd in dict_param:
            dict_param[wd] += 1
    return dict_param


# trans_list 를 받아서 dictionary 로 바꿔줌
def change_dict(list_param):
    dict_wd = {}
    for wd in list_param:
        dict_wd[wd] = 0
    return dict_wd


def sort_dict(dic):  # Value 기준 sort
    import operator
    return sorted(dic.items(), key=operator.itemgetter(1), reverse=True)


dict_words = change_dict(trans_list)     # change_dict 으로 dictionary 형태로 만들어줌
count(trans_list, dict_words)           # 단어의 사용 빈도 수 계산
sorted_dict = sort_dict(dict_words)     # sorted 함수 이용 Value 기준으로 정렬

print(">>> 많이 사용된 단어 10개 : ", sorted_dict[:10])
for i in range(10):     # '사용 단어 - 사용된 빈도'로 출력
    print("Frequency of the word [", sorted_dict[i][0], "] is [", sorted_dict[i][1], "]")

# 한글자의 단어는 제외시키고 만든 list
except_trans_list = []

for word in words_list:
    word = word.translate(tran_tab)
    if word.strip() == '':
        continue
    if len(word) != 1:
        except_trans_list.append(word.strip())  # except_trans_list 에 변환된 문자 삽입


except_dict_words = change_dict(except_trans_list)     # change_dict 으로 dictionary 형태로 만들어줌
count(except_trans_list, except_dict_words)           # 단어의 사용 빈도 수 계산
except_sorted_dict = sort_dict(except_dict_words)     # sorted 함수 이용 Value 기준으로 정렬

print(">>> 많이 사용된 단어 10개 : ", except_sorted_dict[:10])
for i in range(10):     # '사용 단어 - 사용된 빈도'로 출력
    print("Frequency of the word [", except_sorted_dict[i][0], "] is [", except_sorted_dict[i][1], "]")
