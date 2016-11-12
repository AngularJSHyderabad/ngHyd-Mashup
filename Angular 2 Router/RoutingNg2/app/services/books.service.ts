import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable()
export class BooksService {
    books: Book[];
    constructor() {
        this.books = this.booksList;
    };

    getBooks() {
        return this.books;
    };

    private getBookInfo(id: number) {
        return this.booksList.find((element: any) => {
            return element.id === id;
        });
    };

    getBookDetails(id: number) {
        return this.getBookInfo(id);
    };

    getBookIntroduction(id: number) {
        let book = this.getBookInfo(id);
        return new Promise(function (resolve, reject) {
            let intro = book && book.aboutBook ? book.aboutBook : "";
            setTimeout(() => resolve(intro), 2000);
        });
    };

    private booksList: any = [
        {
            id: 12312,
            title: "Life is what you make it",
            author: "Preeti Shenoy",
            pages: 224,
            price: "74 Rupees",
            category: "Spirtual",
            dimensions: "13 x 1.3 x 19.7 cm",
            language: "English",
            publisher: "Srishti Publishers",
            rating: "4/5",
            aboutAuthor: "Preeti Shenoy is an author and an artist based at Bangalore, India. Her first book '34 Bubblegum's and Candies', a creative non-fiction made it to the national best-seller list. Her interests are as multifarious and diverse as her several academic degrees. She also specializes in pencil portraits and holds an internationally recognized qualification from UK in portraiture. She has held a number of varied jobs in the past. She has also written for different publications life Readers Digest and Times of India, as well as taught English and Math to underprivileged children in India. She loves art, reading, travelling, photography, nature, animals, blogging and basketball and most of all, spending time with her spouse and two children.",
            aboutBook: "Life Is What You Make It is based on a love story that has been set in India in the 90s. It has been described by the readers as a book portraying how love, hope and determination can together win over even the destiny. It is a gripping tale of few significant years of the protagonist’s life.  The novel revolves around a woman in her 20s, Ankita, who has a past haunting her like a nightmare. As she grows up from adolescence to a woman in her mid-20s, she wades through different situations, engages in affairs with a couple of guys and is set-back by her parents’ refusal to accept her situation. As a result of non-stop upheavals in her life, Ankita develops bipolar disorder at one point in time.  The story revolves around Ankita’s struggles, determination, her decisions and her faith in self. The book beautifully describes how she gets acquainted with her bipolar disorder, how she decides to help her own self and how she battles these situations all by herself. The title of the book in a way describes the central theme of the book but the manner in which Preeti drove home the point through an interesting story, is delightful."
        },
        {
            id: 67543,
            title: "The Complete Sherlock Holmes:All 56 Stories And 4 Novels",
            author: "Conan Doyle",
            pages: 1088,
            price: "$300",
            category: "Fiction",
            dimensions: "21.4 x 13.6 x 4.6 cm",
            language: "English",
            publisher: "Projapoti Books; 2014 edition",
            rating: "4.5/5",
            aboutAuthor: "Sir Arthur Ignatius Conan Doyle KStJ, DL (22 May 1859 – 7 July 1930) was a Scottish writer and physician, most noted for creating the fictional detective Sherlock Holmes and writing stories about him which are generally considered milestones in the field of crime fiction.",
            aboutBook: "Sherlock Holmes, Of Course, Is The Most Famous Detective Character Of Any Time. From 1891 To The Present Time, He Is The Most Popular Character Among All Crime Fictions For His Extraordinary And Classic Appeal.In This Volume We Present All 4 Novels, The Hound Of Baskervilles, A Study In Scarlet, The Sign Of Four & The Valley Of Fear And All 56 Short Stories Along With Selected Original Illustrations.All Novels & Stories Are Complete & Unabridged.About the AuthorSir Arthur Ignatius Conan Doyle, or Conan Doyle, was born on May 22, 1859, in Edinburgh, Scotland. He was a Scottish writer and physician.His literary works include The Adventures Of Sherlock Holmes, The Land Of Mist, The Lost World, Rodney Stone, The White Company, The Stark Munro Letters, The Horror Of The Heights, The Lost Special, The Coming Of The Fairies, and The Wanderings Of A Spiritualist.He wrote plays, poetry, science fiction, historical novels, and non-fiction. He is best known for his stories of Sherlock Holmes, the detective, and the adventures of Professor Challenger.Doyle attended the Stonyhurst College from 1870 to 1875. He studied medicine at the University of Edinburgh from 1876 to 1881. It was here that he started writing short stories. He was knighted in 1902. Doyle was married twice, and had five children. After the death of several of his family members in the first couple of decades of the twentieth century, Doyle went into depression. He turned to spiritualism to seek solace. The author died of a heart attack at the age of 71. He was posthumously awarded the Archie Goodwin Award."
        },
        {
            id: 98843,
            title: "When Only Love Remains",
            author: "Durjoy Datta",
            pages: 278,
            price: "350",
            category: "Love",
            dimensions: "19.4 x 13.6 x 4.6 cm",
            language: "English",
            publisher: "Penguin Books Limited",
            rating: "4.5/5",
            aboutAuthor: "Durjoy Datta has a degree in Engineering and a postgraduate degree in Management. Born in 1987, his first novel, of Course I Love You, was published in 2008, when he was just 21 years old. He followed this up with other bestselling romance novels. He started Grapevine India Publishers to encourage young writers. He was recognised as a young achiever by Times of India in 2009",
            aboutBook: "The story of “When Only Love Remains” is not grand or other worldly, but rather simple and true, making the story a comforting and easy read. The main characters of the novel are Avanti, who is a flight attendant and Devvrat who is a rising music sensation. He has got his own massive following on social media, however he has fallen into the trap of success, by resorting to drugs, suffering from bouts of depression and living a life that is alone and sad. This, of course, his fans do not know. Avanti is one such fan. Finally, when Avanti and Devvrat do meet, they are pulled passionately towards each other. What follows is a ride of love and fate. One of the best aspects of the book is the easy language that it has been written in, making it a popular novel."
        },
        {
            id: 32544,
            title: "When Only Love Remains - 2",
            author: "Durjoy Datta",
            pages: 278,
            price: "350",
            category: "Love",
            dimensions: "19.4 x 13.6 x 4.6 cm",
            language: "English",
            publisher: "Penguin Books Limited",
            rating: "4.5/5",
            aboutAuthor: "Durjoy Datta has a degree in Engineering and a postgraduate degree in Management. Born in 1987, his first novel, of Course I Love You, was published in 2008, when he was just 21 years old. He followed this up with other bestselling romance novels. He started Grapevine India Publishers to encourage young writers. He was recognised as a young achiever by Times of India in 2009",
            aboutBook: "The story of “When Only Love Remains” is not grand or other worldly, but rather simple and true, making the story a comforting and easy read. The main characters of the novel are Avanti, who is a flight attendant and Devvrat who is a rising music sensation. He has got his own massive following on social media, however he has fallen into the trap of success, by resorting to drugs, suffering from bouts of depression and living a life that is alone and sad. This, of course, his fans do not know. Avanti is one such fan. Finally, when Avanti and Devvrat do meet, they are pulled passionately towards each other. What follows is a ride of love and fate. One of the best aspects of the book is the easy language that it has been written in, making it a popular novel."
        },
        {
            id: 32544,
            title: "When Only Love Remains - 3",
            author: "Durjoy Datta",
            pages: 278,
            price: "350",
            category: "Love",
            dimensions: "19.4 x 13.6 x 4.6 cm",
            language: "English",
            publisher: "Penguin Books Limited",
            rating: "4.5/5",
            aboutAuthor: "Durjoy Datta has a degree in Engineering and a postgraduate degree in Management. Born in 1987, his first novel, of Course I Love You, was published in 2008, when he was just 21 years old. He followed this up with other bestselling romance novels. He started Grapevine India Publishers to encourage young writers. He was recognised as a young achiever by Times of India in 2009",
            aboutBook: "The story of “When Only Love Remains” is not grand or other worldly, but rather simple and true, making the story a comforting and easy read. The main characters of the novel are Avanti, who is a flight attendant and Devvrat who is a rising music sensation. He has got his own massive following on social media, however he has fallen into the trap of success, by resorting to drugs, suffering from bouts of depression and living a life that is alone and sad. This, of course, his fans do not know. Avanti is one such fan. Finally, when Avanti and Devvrat do meet, they are pulled passionately towards each other. What follows is a ride of love and fate. One of the best aspects of the book is the easy language that it has been written in, making it a popular novel."
        }
    ];
}