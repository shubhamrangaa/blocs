const getAppearanceForId = (id) => {
	switch (id) {
		default:
			return null;
		case 0:
			return { sprite: "big-plant.png", isRound: true };
		case 1:
			return { sprite: "chair-bottom.png", isRound: false };
		case 2:
			return { sprite: "chair-top.png", isRound: false };
		case 3:
			return { sprite: "floor-middle.png", isRound: false };
		case 4:
			return { sprite: "grass-left.png", isRound: false };
		case 5:
			return { sprite: "kitchen-right.png", isRound: false };
		case 6:
			return { sprite: "round-table.png", isRound: true };
		case 7:
			return { sprite: "wall-left-right.png", isRound: false };
		case 8:
			return { sprite: "chair-left.png", isRound: false };
		case 9:
			return { sprite: "chair-right.png", isRound: false };
		case 10:
			return { sprite: "floor-bottom.png", isRound: false };
		case 11:
			return { sprite: "floor-right-bottom.png", isRound: false };
		case 12:
			return { sprite: "grass-left-top.png", isRound: false };
		case 13:
			return { sprite: "kitchen-stove.png", isRound: false };
		case 14:
			return { sprite: "small-plant.png", isRound: true };
		case 15:
			return { sprite: "wall-left-top.png", isRound: false };
		case 16:
			return { sprite: "floor-left-bottom.png", isRound: false };
		case 17:
			return { sprite: "floor-left.png", isRound: false };
		case 18:
			return { sprite: "floor-top.png", isRound: false };
		case 19:
			return { sprite: "floor-right.png", isRound: false };
		case 20:
			return { sprite: "grass-right-bottom.png", isRound: false };
		case 21:
			return { sprite: "lamp-left.png", isRound: false };
		case 22:
			return { sprite: "square-table.png", isRound: false };
		case 23:
			return { sprite: "wall-middle.png", isRound: false };
		case 24:
			return { sprite: "floor-right-top.png", isRound: false };
		case 25:
			return { sprite: "floor-top.png", isRound: false };
		case 26:
			return { sprite: "grass-bottom.png", isRound: false };
		case 27:
			return { sprite: "grass-left-bottom.png", isRound: false };
		case 28:
			return { sprite: "grass-right.png", isRound: false };
		case 29:
			return { sprite: "lamp-right.png", isRound: false };
		case 30:
			return { sprite: "wall-bottom.png", isRound: false };
		case 31:
			return { sprite: "wall-right-bottom.png", isRound: false };
		case 32:
			return { sprite: "grass-right-top.png", isRound: false };
		case 33:
			return { sprite: "grass-top.png", isRound: false };
		case 34:
			return { sprite: "kitchen-sink.png", isRound: false };
		case 35:
			return { sprite: "kitchen-left.png", isRound: false };
		case 36:
			return { sprite: "kitchen-middle.png", isRound: false };
		case 37:
			return { sprite: "left-round-table.png", isRound: false };
		case 38:
			return { sprite: "wall-end-bottom.png", isRound: false };
		case 39:
			return { sprite: "wall-right.png", isRound: false };
		case 40:
			return { sprite: "table-left.png", isRound: false };
		case 41:
			return { sprite: "middle-table.png", isRound: false };
		case 42:
			return { sprite: "piano-bottom.png", isRound: false };
		case 43:
			return { sprite: "piano-top.png", isRound: false };
		case 44:
			return { sprite: "right-round-table.png", isRound: false };
		case 45:
			return { sprite: "table-right.png", isRound: false };
		case 46:
			return { sprite: "wall-end-left.png", isRound: false };
		case 47:
			return { sprite: "wall-right-top.png", isRound: false };
		case 48:
			return { sprite: "wall-end-right.png", isRound: false };
		case 49:
			return { sprite: "wall-end-top.png", isRound: false };
		case 50:
			return { sprite: "wall-joint-right.png", isRound: false };
		case 51:
			return { sprite: "wall-joint-bottom.png", isRound: false };
		case 52:
			return { sprite: "wall-joint-left.png", isRound: false };
		case 53:
			return { sprite: "wall-joint-top.png", isRound: false };
		case 54:
			return { sprite: "wall-left-bottom.png", isRound: false };
		case 55:
			return { sprite: "wall-top-bottom.png", isRound: false };
	}
};

export default getAppearanceForId;
