import mongoose from 'mongoose';
import app from './app';
import 'dotenv/config';

const port = process.env.PORT || 5000;
const database_url = process.env.DATABASE_URL;

async function main() {
  try {
    await mongoose.connect(database_url as string);

    app.listen(port, () => {
      console.log(`App Is Listening On Port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
