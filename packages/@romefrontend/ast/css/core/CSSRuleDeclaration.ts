import {CSSIdentifierType, NodeBaseWithComments} from "../../index";
import {createBuilder} from "../../utils";

// foo: bar;
export type CSSRuleDeclaration = NodeBaseWithComments & {
	type: "CSSRuleDeclaration";
	key: CSSIdentifierType;
	// TODO structured `value`
	value: string;
};

export const cssRuleDeclaration = createBuilder<CSSRuleDeclaration>(
	"CSSRuleDeclaration",
	{
		bindingKeys: {},
		visitorKeys: {
			key: true,
		},
	},
);
