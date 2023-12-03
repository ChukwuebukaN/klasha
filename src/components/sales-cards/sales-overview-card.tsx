// @ts-nocheck
import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { SalesOverviewGraphData } from "./sales-data";

function SalesOverviewCard() {
	return (
		<div className="w-[201px] h-[69px]">
			<ResponsiveLine
				data={SalesOverviewGraphData}
				xScale={{ type: "point" }}
				yScale={{
					type: "linear",
					min: "auto",
					max: "auto",
					stacked: true,
					reverse: false,
				}}
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: "transportation",
					legendOffset: 36,
					legendPosition: "middle",
				}}
				axisLeft={{
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: "count",
					legendOffset: -40,
					legendPosition: "middle",
				}}
				enableGridX={false}
				enableGridY={false}
				colors={["#EF2C5A"]}
				keys={["elm"]}
				defs={[
					{
						id: "gradientC",
						type: "linearGradient",
						colors: [
							{ offset: 0, color: "#EF2C5A" },
							{ offset: 80, color: "#EF2C5A", opacity: 0.1 },
						],
					},
				]}
				fill={[{ match: "*", id: "gradientC" }]}
				animate={true}
				enablePoints={false}
				enableSlices="x"
				crosshairType="top"
				pointSize={10}
				pointColor={{ theme: "background" }}
				pointBorderWidth={2}
				pointBorderColor={{ from: "serieColor", modifiers: [] }}
				pointLabelYOffset={-12}
				areaBaselineValue={100}
				enableArea={true}
				isInteractive={false}
				useMesh={true}
				legends={[]}
			/>
		</div>
	);
}

export default SalesOverviewCard;
