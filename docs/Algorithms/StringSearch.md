# 문자열 탐색 (String Search)
*written by sohyeon, hyemin 💡*

<br>

## 문자열 탐색

어떤 문자열 안에 탐색하고자 하는 문자열이 들어 있는지 조사하고 그 위치를 찾아내는 것이다.  
탐색할 문자열을 `패턴` 어떤 문자열을 원본 `텍스트`라고 표현하겠다.

## 1. 브루트-포스

선형 검색을 확장한 알고리즘으로 가능한 모든 경우에 대해 모두 직접 해 보는 알고리즘이다.  
가장 단순한 문자열 탐색 방법으로 단순법, 소박법이라고도 한다.  

문자열 탐색에 `브루트-포스`를 적용할 경우  

1. 패턴을 텍스트의 첫문자부터 겹치는 확인
    - 모든 패턴이 일치할 경우 탐색 성공

2. 패턴과 다른 문자가 나타나면 검색을 중단

3. 텍스트의 검사 위치를 1칸 옮겨 탐색 진행
    - 모든 패턴이 일치할 경우 탐색 성공
    - 다른 문자가 나타나면 3의 과정을 반복

수행 시간 면에서 비효율적인 알고리즘이다.

### 예제 코드

브루트-포스법으로 문자열을 검색하는 프로그램

```Java
import java.util.Scanner;

class BFmatch {
	// 브루트-포스법으로 문자열을 검색하는 메서드 
	static int bfMatch(String txt, String pat) {
		int pt = 0;		// txt 커서
		int pp = 0;		// pat 커서

		while (pt != txt.length() && pp != pat.length()) {
			if (txt.charAt(pt) == pat.charAt(pp)) {
				pt++;
				pp++;
			} else {
				pt = pt - pp + 1;
				pp = 0;
			}
		}
		if (pp == pat.length())         // 검색 성공!
			return pt - pp;
		return -1;                      // 검색 실패!
	}

	public static void main(String[] args) {
		Scanner stdIn = new Scanner(System.in);

		System.out.print("텍스트：");
		String s1 = stdIn.next();         // 텍스트용 문자열 

		System.out.print("패턴：");
		String s2 = stdIn.next();         // 패턴용 문자열 

		int idx = bfMatch(s1, s2);         // 문자열 s1에서 문자열 s2를 검색

		if (idx == -1)
			System.out.println("텍스트에 패턴이 없습니다.");
		else {
			// 일치하는 문자 바로 앞까지의 길이를 구합니다.
			int len = 0;
			for (int i = 0; i < idx; i++)
				len += s1.substring(i, i + 1).getBytes().length;
			len += s2.length();

			System.out.println((idx + 1) + "번째 문자부터 일치합니다.");
			System.out.println("텍스트：" + s1);
			System.out.printf(String.format("패턴：%%%ds\n", len), s2);
		}
	}
}
```

- 텍스트에서 패턴을 검색하여 텍스트의 위치를 반환한다.
- 텍스트에 패턴이 여러개 있는 경우 가장 앞쪽에 위치한 텍스트의 인덱스를 반환하고,  
  검색에 실패하면 -1을 반환한다.  

## 2. KMP 알고리즘

브루트-포스보다 효율적이게 문자열을 탐색하는 알고리즘이다.  
`KMP`는 검사했던 위치 결과를 활용하는 알고리즘이다.   

`KMP`는 예제를 보는 것이 이해하기 쉽다.

### 예시

텍스트 `ZABCABXACCADEF`에서 패턴 `ABCABD`를 검색하는 예시

```
패턴의 표 
ABCABD
-00120

       0123456789
텍스트 ZABCABXACC  
패턴   ABCABD  
       x

첫번째 문자와 패턴이 일치하지 않는다 1칸 뒤로 이동시켜 탐색한다.

       0123456789
텍스트 ZABCABXACC  
패턴    ABCABD  
        ooooox  

패턴의 D가 일치하지 않는다. 
위의 표를 보면 패턴에 겹치는 부분이 존재하며 AB까지는 패턴과 텍스트가 일치했다.
해당 인덱스로 이동해 탐색한다.

       0123456789
텍스트 ZABCABXACC  
패턴       ABCABD  
           oox  

더이상 이동 불가 탐색 실패

```

패턴을 한칸씩 이동하지 않고 패턴의 겹치는 부분을 찾아내 다시 시작할 위치를 구한다.  
패턴을 최소한만 이동시켜 효율을 높인다.  
몇번째 문자부터 다시 검색할지 구하기 위한 표를 만들어 계산한다.

### 예제 코드

```Java
import java.util.Scanner;
// KMP법에 의한 문자열 검색

class KMPmatch {
	// KMP법에 의한 문자열 검색
	static int kmpMatch(String txt, String pat) {
		int pt = 1;                                    // txt 커서
		int pp = 0;                                    // pat 커서
		int[] skip = new int[pat.length() + 1];        // 건너뛰기 표

		// 건너뛰기 표를 만듭니다.
		skip[pt] = 0;
		while (pt != pat.length()) {
			if (pat.charAt(pt) == pat.charAt(pp))
				skip[++pt] = ++pp;
			else if (pp == 0)
				skip[++pt] = pp;
			else
				pp = skip[pp];
		}

		// 검색
		pt = pp = 0;
		while (pt != txt.length() && pp != pat.length()) {
			if (txt.charAt(pt) == pat.charAt(pp)) {
				pt++;
				pp++;
			} else if (pp == 0)
				pt++;
			else
				pp = skip[pp];
		}

		if (pp == pat.length())       // pt - pp를 반환합니다.
			return pt - pp;
		return -1;                    // 검색 실패
	}

	public static void main(String[] args) {
		Scanner stdIn = new Scanner(System.in);

		System.out.print("텍스트：");
		String s1 = stdIn.next();                  // 텍스트용 문자열 

		System.out.print("패턴：");
		String s2 = stdIn.next();                  // 패턴용 문자열 

		int idx = kmpMatch(s1, s2);  // 문자열 s1에서 문자열 s2를 브루트-포스법으로 검색

		if (idx == -1)
			System.out.println("텍스트에 패턴이 없습니다.");
		else {
			int len = 0;
			for (int i = 0; i < idx; i++)
				len += s1.substring(i, i + 1).getBytes().length;
			len += s2.length();

			System.out.println((idx + 1) + "번째 문자와 일치합니다.");
			System.out.println("텍스트：" + s1);
			System.out.printf(String.format("패턴：%%%ds\n", len), s2);
		}
	}
}
```

## 3. Boyer-Moore 알고리즘

KMP보다 효율이 우수해 실제로 문자열 탐색에 많이 사용되는 알고리즘이다.  

패턴의 마지막 문자부터 앞쪽으로 검사를 진행하면서  
일치하지 않는 문자가 있으면 미리 준비한 표에 따라 패턴을 옮길 크기를 정한다.  

### 예시

`ABCXDEZCABACABAC`에서 패턴`ABAC`를 검색하는 경우

```
           v
텍스트 ABC X DEZCABACABAC
a      ABA C				패턴과 텍스트의 문자가 서로 다름
b       AB A C				패턴을 1칸 옮겨도 문자가 서로 다르다.
c        A B AC				패턴을 2칸 옮겨도 문자가 서로 다르다.
d          A BAC			패턴을 3칸 옮겨도 문자가 서로 다르다.

패턴안에 들어있지 않은 텍스트를 발견하면 해당 위치까지 건너뛰고 탐색을 수행한다.  

               v
텍스트 ABCXDEZ C ABACABAC
           ABA C			일치

              v
텍스트 ABCXDE Z CABACABAC
a         ABA C						  
b          AB A C			
c           A B AC			
d             A BAC			불일치

Z가 패턴에 존재하지 않으므로 한번에 3칸 옮겨 다시 탐색한다.

                  v
텍스트 ABCXDEZCAB A CABAC
a             ABA C						  
b              AB A C		일치

A 문자가 일치하는 것을 확인하고
해당 위치에서 패턴의 마지막 위치 문자부터 비교한다.

                <---   
텍스트 ABCXDEZC ABAC ABAC
                ABAC		일치

모두 일치하여 검색에 성공한다.
```

패턴의 길이를 n이라고 하면 현재 검사하고 있는 텍스트의 문자 위치로부터  
다음에 검사할 패턴의 마지막 문자 위치가 n만큼 떨어질 수 있도록 패턴을 이동 시킨다.

각각의 문자를 만났을 때 패턴을 옮길 크기를 저장할 표를 만들어야 한다.  

### 표 만들기

n = 패턴 문자열의 길이

* 패턴에 들어 있지 않은 문자를 만난 경우
	1. 패턴을 옮길 크기는 n이다.

* 패턴에 들어 있는 문자를 만난 경우
	1. 마지막에 나오는 위치의 인덱스가 k이면 패턴을 옮길 크기는 n-k-1이다.
	2. 같은 문자가 패턴 안에 중복해서 들어있지 않다면 패턴을 옮길 크기는 n이다.

### 예제 코드

```Java
import java.util.Scanner;

class BMmatch {
	// Boyer-Moore법으로 문자열을 검색 
	static int bmMatch(String txt, String pat) {
		int pt;                             // txt 커서
		int pp;                             // pat 커서
		int txtLen = txt.length();          // txt의 문자 개수
		int patLen = pat.length();          // pat의 문자 개수
		int[] skip = new int[Character.MAX_VALUE + 1];	// 건너뛰기 표

		// 건너뛰기 표 만들기
		for (pt = 0; pt <= Character.MAX_VALUE; pt++)
			skip[pt] = patLen;
		for (pt = 0; pt < patLen - 1; pt++)
			skip[pat.charAt(pt)] = patLen - pt - 1;	// pt == patLen - 1
		// 검색
		while (pt < txtLen) {
			pp = patLen - 1;				// pat의 끝 문자에 주목

			while (txt.charAt(pt) == pat.charAt(pp)) {
				if (pp == 0)
					return pt;	// 검색 성공
				pp--;
				pt--;
			}
			pt += (skip[txt.charAt(pt)] > patLen - pp) ? skip[txt.charAt(pt)] : patLen - pp;
		}
		return -1;				// 검색 실패
	}

	public static void main(String[] args) {
		Scanner stdIn = new Scanner(System.in);

		System.out.print("텍스트：");
		String s1 = stdIn.next(); 					// 텍스트용 문자열 

		System.out.print("패턴：");
		String s2 = stdIn.next();					// 패턴용 문자열 

		int idx = bmMatch(s1, s2);	// 문자열 s1에서 문자열 s2를 BM법으로 검색

		if (idx == -1)
			System.out.println("텍스트에 패턴이 없습니다.");
		else {
			int len = 0;
			for (int i = 0; i < idx; i++)
				len += s1.substring(i, i + 1).getBytes().length;
			len += s2.length();

			System.out.println((idx + 1) + "번째 문자와 일치합니다.");
			System.out.println("텍스트：" + s1);
			System.out.printf(String.format("패턴：%%%ds\n", len), s2);
		}
	}
}
```

<br> 

## Reference & Additional Resources
  
> Do it! 자료구조와 함께 배우는 알고리즘 입문, 자바 편