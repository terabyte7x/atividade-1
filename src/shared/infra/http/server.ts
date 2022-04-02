import art from "ascii-art";

import { app } from "./app";

app.listen(3333, () => {
    try {
        art.font("USJT", "Doom", (err: string, rendered: void) => {
            console.log(
                "-----------------------------------------------------------"
            );

            console.log(rendered);

            console.log(`Build with ❤  by Felipe Duque.   |   RA: 822133549`);

            console.log(
                "-----------------------------------------------------------"
            );
        });
    } catch (err) {
        console.log(err);
    }
});
