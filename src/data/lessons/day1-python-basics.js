export default {
  slug: 'day1-python-basics',
  title: 'Python cơ bản',
  subtitle: 'Biến, kiểu dữ liệu, điều khiển luồng, hàm và các kiểu tập hợp',
  module: 'Module B · Lập trình',
  time: '12 phút',
  difficulty: 'Beginner',
  importance: 'High',
  assessmentTip: 'Kỳ đánh giá thường đưa một đoạn Python ngắn và yêu cầu dự đoán kết quả. Hãy luyện đọc code từng dòng một.',
  quizId: 'day1-python-basics',
  objectives: [
    'Đọc và dự đoán kết quả của code Python cơ bản',
    'Nhận biết biến, kiểu dữ liệu và các kiểu tập hợp',
    'Hiểu if/for/while và hàm trong nháy mắt',
  ],
  whatIsIt: [
    'Python là ngôn ngữ lập trình được dùng phổ biến trong dữ liệu và AI.',
    'Bạn không cần viết chương trình phức tạp — chỉ cần ĐỌC code và dự đoán kết quả.',
    'Kỳ đánh giá kiểm tra khả năng theo dõi logic đơn giản từng bước.',
  ],
  whyImportant: [
    'Module B (Lập trình & Xử lý dữ liệu) là module lớn nhất, chiếm 35%.',
    'Hầu hết câu hỏi đưa code và hỏi "Kết quả là gì?"',
    'Nếu đọc được Python, bạn có thể trả lời nhanh nhiều câu hỏi.',
  ],
  keyConcepts: [
    'Biến lưu giá trị: x = 5',
    'Kiểu dữ liệu: int, float, str, bool',
    'Tập hợp: list, tuple, dictionary, set',
    'if / elif / else để ra quyết định',
    'for và while để lặp',
    'def để định nghĩa hàm',
  ],
  examples: [
    {
      code: `x = 5
y = 2
print(x + y)   # 7
print(x * y)   # 10
print(x // y)  # 2  (phép chia lấy phần nguyên)
print(x % y)   # 1  (phần dư)`,
      note: 'Dự đoán kết quả: 7, 10, 2, 1. Phép chia phần nguyên // bỏ phần thập phân.',
    },
    {
      code: `name = "AI"
age = 25
print(name, age)   # AI 25
print(type(age))   # <class 'int'>`,
      note: 'Chuỗi dùng dấu ngoặc kép; số thì không. type() cho biết kiểu dữ liệu.',
    },
    {
      code: `score = 75
if score >= 60:
    print("Pass")
else:
    print("Fail")
# Kết quả: Pass`,
      note: 'if kiểm tra điều kiện. Thụt lề (4 dấu cách) rất quan trọng trong Python.',
    },
    {
      code: `for i in range(3):
    print(i)
# Kết quả: 0 1 2`,
      note: 'range(3) cho 0, 1, 2. range bắt đầu từ 0.',
    },
    {
      code: `def add(a, b):
    return a + b

print(add(3, 4))   # 7`,
      note: 'def tạo hàm. return gửi giá trị trả về.',
    },
    {
      code: `fruits = ["apple", "banana", "cherry"]
print(fruits[0])    # apple
print(len(fruits))  # 3
fruits.append("date")
print(len(fruits))  # 4`,
      note: 'List có thứ tự và có thể thay đổi. Chỉ số bắt đầu từ 0.',
    },
    {
      code: `person = {"name": "Minh", "age": 30}
print(person["name"])   # Minh
print(person.keys())    # dict_keys(['name', 'age'])`,
      note: 'Dictionary lưu cặp khóa-giá trị. Truy cập theo khóa.',
    },
  ],
  assessmentQs: [
    'Kết quả của một câu print() được cho là gì?',
    'Kiểu dữ liệu nào là list, tuple hay set?',
    'range(3) tạo ra gì?',
    'Điều gì xảy ra khi truy cập list ở vị trí 0?',
    'if/else quyết định nhánh nào chạy như thế nào?',
  ],
  mistakes: [
    'Quên rằng chỉ số bắt đầu từ 0, không phải 1.',
    'Nhầm lẫn giữa // (chia nguyên) và / (chia thường).',
    'Nghĩ range(3) gồm cả 3 — thực ra không.',
    'Nhầm list (có thể đổi) với tuple (không thể đổi).',
    'Quên rằng thụt lề định nghĩa khối code trong Python.',
  ],
  summary: [
    'Biến lưu giá trị; print() hiển thị chúng.',
    'List có thứ tự và thay đổi được; tuple thì không thay đổi được.',
    'Dictionary lưu cặp khóa-giá trị.',
    'if/else ra quyết định; for/while lặp code.',
    'def định nghĩa hàm; return gửi giá trị về.',
  ],
  cheatSheet: [
    { term: 'int', def: 'số nguyên, ví dụ 5' },
    { term: 'float', def: 'số thập phân, ví dụ 5.0' },
    { term: 'str', def: 'chuỗi trong ngoặc, ví dụ "AI"' },
    { term: 'bool', def: 'True hoặc False' },
    { term: 'list', def: 'có thứ tự, thay đổi được: [1,2,3]' },
    { term: 'tuple', def: 'có thứ tự, không đổi: (1,2,3)' },
    { term: 'dict', def: 'cặp khóa-giá trị: {"a":1}' },
    { term: 'set', def: 'phần tử duy nhất, không thứ tự: {1,2,3}' },
    { term: 'range(n)', def: 'từ 0 đến n-1' },
    { term: '//', def: 'phép chia lấy phần nguyên' },
    { term: '%', def: 'phần dư' },
    { term: 'len()', def: 'số lượng phần tử' },
  ],
}
