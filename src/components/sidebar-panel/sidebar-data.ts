import { ReactComponent as DashboardIcon } from "../../assets/svg/sidebar-panel/dashboard-icon.svg";
import { ReactComponent as BalancesIcon } from "../../assets/svg/sidebar-panel/balances-icon.svg";
import { ReactComponent as TransactionsIcon } from "../../assets/svg/sidebar-panel/transactions-icon.svg";
import { ReactComponent as AnalyticsIcon } from "../../assets/svg/sidebar-panel/analytics-icon.svg";
import { ReactComponent as MarketingIcon } from "../../assets/svg/sidebar-panel/marketing-icon.svg";
import { ReactComponent as ExchangeRatesIcon } from "../../assets/svg/sidebar-panel/exchange-rates-icon.svg";
import { ReactComponent as CheckoutIcon } from "../../assets/svg/sidebar-panel/checkout-icon.svg";
import { ReactComponent as PaymentLinksIcon } from "../../assets/svg/sidebar-panel/payment-links-icon.svg";
import { ReactComponent as WireIcon } from "../../assets/svg/sidebar-panel/wire-icon.svg";

export const MainPagesRoutes = [
	{
		name: "Dashboard",
		route: "dashboard",
		icon: DashboardIcon,
	},
	{
		name: "Balances",
		route: "balances",
		icon: BalancesIcon,
	},
	{
		name: "Transactions",
		route: "transactions",
		icon: TransactionsIcon,
	},
	{
		name: "Analytics",
		route: "analytics",
		icon: AnalyticsIcon,
	},
	{
		name: "Marketing",
		route: "marketing",
		icon: MarketingIcon,
	},
	{
		name: "Exchange Rates",
		route: "exchange-rates",
		icon: ExchangeRatesIcon,
	},
];

export const AcceptPaymentsRoutes = [
	{
		name: "Checkout",
		route: "checkout",
		icon: CheckoutIcon,
	},
	{
		name: "Payment Links",
		route: "payment-links",
		icon: PaymentLinksIcon,
	},
];

export const SendPaymentsRoutes = [
	{
		name: "Wire",
		route: "wire",
		icon: WireIcon,
	},
];
