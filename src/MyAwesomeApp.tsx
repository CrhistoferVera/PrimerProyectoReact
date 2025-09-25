import type { CSSProperties } from "react";

const firstName = "Crhistofer";
const lastName = "Vera";

const favoriteGames = ["Fortnite", "Rust", "Valorant"];
const isActive = true;
const address = {
    zipCode: "abc123",
    country : "Bolivia"
}

const myStyles: CSSProperties= {
    backgroundColor: "#fafafa",
    borderRadius: 20,
    padding: 10,
    marginTop: 20
}
export function MyAwesomeApp(){

    return(
        <div>
            <h1 style={myStyles} data-testid="first-name-title">{firstName}</h1>
            <h3>{lastName}</h3>
            <p className="mi-clase-favorita">{favoriteGames.join(", ")}</p>
            <h1>{isActive ? "activo" :"inactivo"}</h1>
            <p
            style={{
                backgroundColor: "red",
                borderRadius: 10,
                padding: 10,
            }}>{ JSON.stringify(address)}</p>
        </div>
    );
}