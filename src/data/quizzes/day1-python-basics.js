export default {
  id: 'day1-python-basics',
  title: 'Quiz Python cơ bản',
  questions: [
    {
      id: 'py1',
      type: 'output-prediction',
      topic: 'Python cơ bản',
      question: 'Kết quả của code này là gì?',
      code: `x = 7
y = 2
print(x // y)`,
      options: ['3.5', '3', '2', '1'],
      answerIndex: 1,
      explanation: '// là phép chia lấy phần nguyên. 7 // 2 = 3 (bỏ phần thập phân).',
      tip: 'Nhớ: // bỏ phần thập phân, / giữ lại.',
    },
    {
      id: 'py2',
      type: 'output-prediction',
      topic: 'Python cơ bản',
      question: 'Kết quả của code này là gì?',
      code: `for i in range(3):
    print(i)`,
      options: ['1 2 3', '0 1 2', '0 1 2 3', '3 2 1'],
      answerIndex: 1,
      explanation: 'range(3) tạo 0, 1, 2. Nó bắt đầu từ 0 và dừng trước 3.',
    },
    {
      id: 'py3',
      type: 'multiple-choice',
      topic: 'Python cơ bản',
      question: 'Kiểu dữ liệu nào có thứ tự và KHÔNG thể thay đổi sau khi tạo?',
      options: ['list', 'tuple', 'set', 'dictionary'],
      answerIndex: 1,
      explanation: 'Tuple có thứ tự và bất biến (không đổi được). List thì có thể đổi.',
    },
    {
      id: 'py4',
      type: 'output-prediction',
      topic: 'Python cơ bản',
      question: 'Kết quả của code này là gì?',
      code: `fruits = ["apple", "banana", "cherry"]
print(fruits[0])`,
      options: ['apple', 'banana', 'cherry', 'Error'],
      answerIndex: 0,
      explanation: 'Chỉ số bắt đầu từ 0, nên fruits[0] là "apple".',
    },
    {
      id: 'py5',
      type: 'multiple-choice',
      topic: 'Python cơ bản',
      question: 'Toán tử % trong Python làm gì?',
      options: ['Dấu phần trăm', 'Chia lấy phần nguyên', 'Phần dư (modulo)', 'Phép nhân'],
      answerIndex: 2,
      explanation: '% trả về phần dư. Ví dụ 7 % 2 = 1.',
    },
    {
      id: 'py6',
      type: 'output-prediction',
      topic: 'Python cơ bản',
      question: 'Kết quả của code này là gì?',
      code: `score = 45
if score >= 60:
    print("Pass")
else:
    print("Fail")`,
      options: ['Pass', 'Fail', 'Error', 'Không in gì'],
      answerIndex: 1,
      explanation: '45 không >= 60, nên nhánh else chạy và in "Fail".',
    },
    {
      id: 'py7',
      type: 'multiple-choice',
      topic: 'Python cơ bản',
      question: 'Cái nào lưu cặp khóa-giá trị?',
      options: ['list', 'tuple', 'set', 'dictionary'],
      answerIndex: 3,
      explanation: 'Dictionary lưu cặp khóa-giá trị, ví dụ {"name": "Minh"}',
    },
    {
      id: 'py8',
      type: 'output-prediction',
      topic: 'Python cơ bản',
      question: 'Kết quả của code này là gì?',
      code: `def add(a, b):
    return a + b

print(add(3, 4))`,
      options: ['34', '7', '12', 'Error'],
      answerIndex: 1,
      explanation: 'Hàm trả về a + b = 3 + 4 = 7.',
    },
  ],
}
