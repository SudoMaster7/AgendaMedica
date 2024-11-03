import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles ={
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingLaft: 20,
        paddingRight: 20,
        justifyContent: "space-between",
        marginBottom: 20,
    },
    theme:{
        todayTextColor: COLORS.red,
        selectedDayBackgroundColor: COLORS.green,
        selectedDayTextColor: COLORS.white,
        arrowColor: COLORS.green
    },
    textHour:{
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.black,
        marginTop: 20
    }

}