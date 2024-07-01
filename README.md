## REACT NAVIGATION 핵심 정리 

-> npx expo init react-navigation-tutorial 로 프로젝트 생성 (javascripts기반 )

## REACT NAVIGATION 설치  + expo 관리 dependencies 설치

-> npm install @react-navigation/native
-> npx expo install react-native-screens react-native-safe-area-context
-> npm install @react-navigation/native-stack

## 스크린 이동
 
 -> 스크린 A, B ,C제작
 -> A 에서 B로이동 B에서는 뒤로가기 
 -> navigate를 활용하여 파람값을 받아 B로 이동  
 -> ScreenC에서  NestedStackNavigation을 사용하여 중첩된 네비게이션을 사용한다.

 //여기까지 주석처리 

 ## 탭네비게이터 활용하기

 -> npm install @react-navigation/bottom-tabs 설치 
 -> 하단의 탭 네비게이터를 사용하여 스크린을 이동시킨다.
 -> tab 아이콘 expo vector icons를 이용하여 활용 ( npm install @expo/vector-icons)
 -> 


