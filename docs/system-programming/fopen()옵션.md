# fopen() 함수

PHP를 공부하던 중 파일을 제어할 일이 생겼다.

C언어에서 file을 다루던 것과 거의 똑같이 fopen()를 활용하면 더 쉬운 file 제어가 가능했다.

C언어를 사용할 때 자주 헷갈렸던 r / w / r+ / w+ / a 옵션을 정리해두려고 한다.

---

[stack overflow](https://stackoverflow.com/questions/21113919/difference-between-r-and-w-in-fopen)
에 나와 같은 고민을 한 개발자의 질문을 인용하겠다.  

## Difference between r+ and w+ in fopen()

In `fopen("myfile", "r+")` what is the difference between the `"r+"` and `"w+"` open mode? I read this


> `"r"` Open a text file for reading.  
> `"w"` Open a text file for writing, truncating an an existing file to zero length, or creating the file if it does not exist.  
>   
> `"r+"` Open a text file for update (that is, for both reading and writing).  
> "w+" Open a text file for update (reading and writing), first truncating the file to zero length if it exists or creating the file if it does not exist.

I mean the difference is that if I open the file with "w+", the file will be erased first?

---

답변 중 이 이미지를 참고하면 확실히 정리가 된다.


![img](/system-programming/img/fopen()정리.png)

