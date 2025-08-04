node js
-------------

Node.js JavaScript ka run-time hai,
jo JS ko browser ke bahar run karne ki functionalities provide karta hai.

Node.js JavaScript ka server-side version hai.



JavaScript
--------------------


JavaScript client-side scripting language hai
jo client ke device pe run hoti hai.
Kahne ka matlab hai ki JavaScript ka sara code client machine pe jaake run hota hai.
Ye server pe run nahi ho sakti — isliye ise client-side scripting language kehte hain.


Note:
-----------------
JavaScript server-side scripting nahi hai,
wo client-side scripting hai.

JavaScript ko server pe run karne ke liye ek environment chahiye tha,
jo Ryan Dahl ne banaya.

Ab JavaScript ko server-side pe bhi run kar sakte hain.
Lekin JavaScript ki nature client-side scripting hi hai —
environment banane se wo server-side scripting language nahi ban jaati.


JavaScript me bahut saari problems thi:
--------------------------------------------------

- Kyunki wo sirf browser me run hoti thi, terminal ya CMD me nahi.
- Isliye wo file handling nahi kar sakti thi.
- Server handle nahi kar sakti thi.
- JavaScript sirf request bhej sakti thi, response nahi de sakti thi.

Response dena sirf server-side language ka kaam hota hai,
jo compiled language hoti hai aur terminal pe run hoti hai.



node js announcement
---------------------


Ek person the jinka naam tha Ryan Dahl.
Woh ek developer the jo Apache framework pe kaam karte the.

Us time ki sabhi languages thread-based thi:
Java, PHP, etc. — sabhi multithreaded environment pe kaam karti thi.



Problem ye thi ki har request ke liye ek thread banta tha.
Agar ek baar me 1000 requests aayein,
to 1000 thread ban jaate the.

Har thread system ke resource use karta hai.
Agar resource khatam ho jaye to system request lena band kar deta tha.
Baki users ko wait karna padta tha jab tak resource free na ho.



 Example:
--------------------------

Maan lo koi website hai — government ki — form nikalta hai.

Sab log ek saath form bhar rahe hain.
Agar website thread-based hai,
aur ek baar me 1000 threads hi chal sakte hain,
to sirf 1000 hi log form bhar sakte hain.
Baaki logon ko wait karna padega jab tak pehle wale complete na ho jaayein.



 Ryan Dahl Ka Solution:
-------------------------------

Ryan Dahl ko ye problem bahut badi lagi.

Unhone sabhi programming languages analyze ki.
Unhe JavaScript sabse best lagi.

Kyuki unhone jo socha tha — wo sab cheezein JavaScript me thi:
event-driven , event loop, call stack, event queue, etc.

To unhone decide kiya:
JavaScript ko browser ke bahar run karne layak banaenge.
Ek aisa environment banayenge jisme JavaScript server pe bhi chal sake.

Aur to aur — single thread se 1000s of requests handle ho sakein,
bina ruke, bina thake — efficiently.


Sab log sochne lage: "What? Ye kaise hoga?"
"Single thread me 1000 request? Aur JavaScript server pe?"
"Majak lagta hai!"



Node.js ka Launch:
-------------------------------

Ek din Node.js ka pehla version launch hota hai.

Ryan Dahl ne C++ ki library "libuv" aur Chrome ka V8 engine use karke,
JavaScript ka run-time bana diya.

Ab JavaScript:

- File handling kar sakti thi
- Server create kar sakti thi
- API responses de sakti thi
- Aur terminal me bhi run hone lagi thi



 Final Thought:
 ---------------------------------

Sab log sochne lage: "Bhai ye kaise ho gaya?"
"Jo kaam multi-threaded language nahi kar paayi,
wo single thread ne kaise kar diya?"

Yahi tha Node.js ka magic!
