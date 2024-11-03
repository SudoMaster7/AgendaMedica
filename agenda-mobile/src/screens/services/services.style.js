import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles ={
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
    },
    image: {
        width: 100, /* Defina o tamanho desejado */
        height: 100,
        borderRadius: 40,
    },
    banner:{
        backgroundColor: COLORS.green,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 9,
        paddingBottom: 10
    },

    name:{
        fontSize: FONT_SIZE.md,
        color: COLORS.white,
        fontWeight: "bold",
        marginTop: 5
    },
    specialty:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.white,
        marginTop: 3
    },
}