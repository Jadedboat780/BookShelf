import psycopg2
from faker import Faker
import random

# Подключение к базе данных
conn = psycopg2.connect(
    dbname="test_db",
    user="postgres",
    password="postgres",
    host="localhost",
    port="5433"
)
cursor = conn.cursor()

fake = Faker()

# Заполняем таблицу Users
users = []
for _ in range(10):
    login = fake.unique.user_name()
    password = fake.password()
    email = fake.unique.email()
    cursor.execute(
        "INSERT INTO Users (login, password, email) VALUES (%s, %s, %s) RETURNING id",
        (login, password, email)
    )
    users.append(cursor.fetchone()[0])  # Сохраняем user_id

# Возможные категории книг
categories = ["Фантастика", "Детектив", "Роман", "История", "Наука"]

# Заполняем таблицу Books
books = []
for _ in range(15):
    user_id = random.choice(users)
    title = fake.sentence(nb_words=3)[:40]
    author = fake.name()[:40]
    category = random.choice(categories)
    publication_year = random.randint(1950, 2024)  # Год публикации
    description = fake.text(max_nb_chars=100)

    cursor.execute(
        "INSERT INTO Books (user_id, title, author, category, publication_year, description) VALUES (%s, %s, %s, %s, %s, %s) RETURNING id",
        (user_id, title, author, category, publication_year, description)
    )
    books.append(cursor.fetchone()[0])  # Сохраняем book_id

# Заполняем таблицу WishList
for _ in range(10):
    user_id = random.choice(users)
    book_id = random.choice(books)

    cursor.execute(
        "INSERT INTO WishList (user_id, book_id) VALUES (%s, %s)",
        (user_id, book_id)
    )

# Сохраняем изменения и закрываем соединение
conn.commit()
cursor.close()
conn.close()

print("Тестовые данные успешно добавлены в базу данных.")

