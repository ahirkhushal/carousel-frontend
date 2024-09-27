
# Project Setup Instructions

Follow the steps below to get the project up and running.

## 1. Clone the Project

First, clone the project from the repository to your local machine.

```bash
git clone <repository-url>
```
Replace `<repository-url>` with the actual URL of your project repository.

## 2. Install Dependencies

Navigate into the project directory and install the required Node packages by running the following command:

```bash
npm install
```

This will install all the necessary dependencies for the project.

## 3. Compile SCSS to CSS

After installing the dependencies, compile the SCSS file to CSS. Run the following command:

```bash
npx sass style.scss style.css
```

This will convert the `style.scss` file into `style.css`.

## 4. Open `index.html`

Now that the SCSS has been compiled, open the `index.html` file. If you are using VS Code, you can click the **"Go Live"** button in the bottom right corner of the editor to launch the project.

If you can't find the **Go Live** button, you need to install the **Live Server** extension in VS Code.

### How to Install Live Server:

1. Go to the **Extensions** view by clicking the **Extensions** icon in the Activity Bar on the side of the window.
2. Search for **Live Server**.
3. Click **Install**.
4. After installing, you should see the **Go Live** button appear in the bottom right corner of the editor.

Once installed, click the **Go Live** button to start the live server and open the project in your browser.

---

You’re all set! Any changes you make to the `style.scss` file can be recompiled by running the `sass style.scss style.css` command again. Enjoy developing!
