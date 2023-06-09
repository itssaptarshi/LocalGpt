# LocalGPT

This is a forked project of private-gpt with a web ui. 

Create a QnA chatbot on your documents without relying on the internet by utilizing the capabilities of local LLMs. Ensure complete privacy and security as none of your data ever leaves your local execution environment. Seamlessly process and inquire about your documents even without an internet connection. Inspired from [imartinez](https://github.com/imartinez)

## Requirements

* Python 3.8 or later

## How to run


1. Go to server folder and put the documents in the source documents folder. 

   Click on [ggml-gpt4all-j-v1.3-groovy.bin.](https://gpt4all.io/models/ggml-gpt4all-j-v1.3-groovy.bin) and download the model. 

   Make a new folder called models and save it in there.  

   Rename .env.example to .env
   ***Make sure to put in the entire path of the model. Else it might cause issue***

and run the below commands

   ```shell
   pip install -r requirements.txt
   ```
   ```shell
   python inges.py.
   ```
   This process might take some time. Depends on the size of the data and your computer's processing power. 

   ```shell
   python privateGPT.py
   ```

2. Go to client folder and run the below commands

   ```shell
   npm install   
   ```

   ```shell
   npm run dev
   ```

3. Now run any query on your data. Data querying is slow and thus wait for sometime. 

## Data

The supported extensions for documents are:

* .csv: CSV,
* .docx: Word Document,
* .enex: EverNote,
* .eml: Email,
* .epub: EPub,
* .html: HTML File,
* .md: Markdown,
* .msg: Outlook Message,
* .odt: Open Document Text,
* .pdf: Portable Document Format (PDF),
* .pptx : PowerPoint Document,
* .txt: Text file (UTF-8),

Give a star if you like the repo, i guess. 