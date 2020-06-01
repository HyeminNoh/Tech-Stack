# SQL JOIN문
*written by sohyeon, hyemin 💡*

<br>

## 1. JOIN문

두 개 이상의 테이블을 연결하여 데이터를 조회하는 방법이다.  
연사자, From절의 JOIN 형태에 따라 4가지로 나뉘어진다.

* 연산자에 따른 분류  
    - EQUI JOIN
    - Non-EQUI JOIN
    
* From절의 JOIN 형태에 따라
    - INNER JOIN
    - OUTER JOIN

## 2. INNER JOIN

### 1) EQUI JOIN

- 조인 대상 테이블의 칼럼 값들이 서로 정확하게 일치하는 경우에 사용
- `WHERE`절에 `=`(Equality Condition)연산자를 사용해 조건을 명시
- EQUI JOIN의 성능을 높이려면 INDEX 기능을 사용하는 것이 좋다.
- 두 테이블을 연결할 때 Hash JOIN을 활용하는 특징이 있다.

```sql
SELECT [테이블명1.]속성명, [테이블명2.]속성명 ....
FROM 테이블명1, 테이블명2
WHERE 테이블명1.속성명 = 테이블명2.속성명
```

#### INNER JOIN 구문

```sql
SELECT [테이블명1.]속성명, [테이블명2.]속성명 ....
 FROM 테이블명1
INNER JOIN 테이블명2
 ON 테이블명1.속성명 = 테이블명2.속성명
```

### 2) NATURAL JOIN

- EQUI JOIN에서 `=`조건이 성립할 때 동일한 속성이 두번 나타나게 되는데, 중복을 제거해 한번만 표기하게 하는 방식이다.  
- 두 테이블의 동일한 이름을 가지는 칼럼이 모두 JOIN
- 동일한 칼럼을 내부적으로 찾게 되므로 테이블 별칭을 주면 오류가 발생

```sql
SELECT [테이블명1.]속성명, [테이블명2.]속성명 ....
FROM 테이블명1  NATURAL JOIN  테이블명2
```

NATURAL JOIN만 실행하면 동일한 이름을 가진 칼럼은 모두 조인되는데,  
USING절을 활용하면 칼럼을 선택해 조인할 수 있다.  
USING절 안에 포함되는 칼럼에 별칭을 지정하면 오류가 발생한다.  

```sql
SELECT [테이블명1.]속성명, [테이블명2.]속성명 ....
FROM 테이블명1  
   JOIN 테이블명2
 USING(속성명)
```

### 3) NON EQUI JOIN

- BETWEEN AND, IS NULL, IS NOT NULL, NOT IN, <, >, >=, <= 연산자를 사용한다.  

```sql
SELECT [테이블명1.]속성명, [테이블명2.]속성명 ....
FROM 테이블명1, 테이블명2..
WHERE (NON EQUI JOIN 조건)
```

### 4) SELF JOIN

- 같은 테이블에서 2개의 속성을 연결하여 EQUI JOIN을 한다.  

```sql
-- 방법1
SELECT [별칭1.]속성명, [별칭2.]속성명 ....
FROM 테이블명1 AS 별칭1,  테이블명2 AS 별칭2 
WHERE 별칭1.속성명 = 별칭2.속성명
 
-- 방법2
SELECT [별칭1.]속성명, [별칭2.]속성명 ....
FROM 테이블명1 AS 별칭1 
  JOIN  테이블명2 AS 별칭2 
    ON 별칭1.속성명 = 별칭2.속성명
```

### 5) CROSS JOIN

테이블 A에서 조회되는 하나의 행에 테이블 B에서 조회되는 모든 행을 연결하여 조인한다.  

```sql
SELECT [테이블명1.]속성명, [테이블명2.]속성명 ....
FROM 테이블명1 CROSS JOIN 테이블명2
```

## 3. OUTER JOIN

일반적인 INNER JOIN과 비슷하지만 한 쪽의 데이터에서 JOIN조건에 일치하지 않는 값까지 모두 가져와 조회한다.   

### 1) LEFT OUTER JOIN

JOIN 수행 시 왼쪽에 표기된 테이블은 JOIN조건에 일치하지 않는 값까지 모두 조회된다.  

```sql
-- 방법1
SELECT [테이블명1.]속성명, [테이블명2.]속성명 ....
FROM 테이블명1  LEFT OUTER JOIN   테이블명2..
ON 테이블명1.속성명 = 테이블명2.속성명
 
-- 방법2
SELECT [테이블명1.]속성명, [테이블명2.]속성명 ....
FROM 테이블명1, 테이블명2
WHERE 테이블명1.속성명 = 테이블명2.속성명(+)
```

### 2) RIGHT OUTER JOIN

JOIN 수행 시 오른쪽에 표기된 데이블은 JOIN조건에 일치하지 않는 값까지 모두 조회된다.  

```sql
-- 방법1
SELECT [테이블명1.]속성명, [테이블명2.]속성명 ....
FROM 테이블명1  RIGHT  OUTER JOIN   테이블명2..
ON 테이블명1.속성명 = 테이블명2.속성명
 
-- 방법2
SELECT [테이블명1.]속성명, [테이블명2.]속성명 ....
FROM 테이블명1, 테이블명2
WHERE 테이블명1.속성명(+) = 테이블명2.속성명
```

### 3) FULL OUTER JOIN

조인 수행 시 왼쪽, 오른쪽 테이블의 모든 값을 읽어 JOIN을 수행한다. LEFT OUTER JOIN과 RIGHT OUTER JOIN의 결과를 합집합으로 처리한 결과와 동일하다.

```sql
SELECT [테이블명1.]속성명, [테이블명2.]속성명 ....
FROM 테이블명1  FULL  OUTER JOIN   테이블명2..
ON 테이블명1.속성명 = 테이블명2.속성명
```
