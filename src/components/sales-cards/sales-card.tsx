// @ts-nocheck
import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { SalesGraphData } from "./sales-data";

function SalesCard() {
	return (
		<div className="w-full h-[286px]">
			<ResponsiveLine
				data={SalesGraphData}
				margin={{ top: 30, right: 30, bottom: 60, left: 60 }}
				animate={true}
				enablePoints={false}
				pointSize={10}
				pointColor={{ theme: "background" }}
				pointBorderWidth={2}
				pointBorderColor={{ from: "serieColor", modifiers: [] }}
				pointLabelYOffset={-12}
				areaBaselineValue={300}
				// enableSlices={false}
				enableSlices="x"
				crosshairType="bottom"
				useMesh={true}
				legends={[]}
				theme={{
					crosshair: {
						line: {
							stroke: "#0A0A0A",
							strokeWidth: 3,
							strokeDasharray: 0,
						},
					},
				}}
				yScale={{
					type: "linear",
					min: 600,
					max: 4000,
					stacked: false,
					reverse: false,
				}}
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickSize: 0,
					tickPadding: 25,
					tickRotation: 0,
					legendOffset: 36,
					legendPosition: "middle",
				}}
				axisLeft={{
					tickSize: 0,
					tickPadding: 20,
					tickRotation: 0,
					legendOffset: -40,
					legendPosition: "middle",
				}}
				enableGridX={false}
				enableArea={true}
				colors={["#EF2C5A"]}
				keys={["elm"]}
				fill={[{ match: "*", id: "gradientC" }]}
				defs={[
					{
						id: "gradientC",
						type: "linearGradient",
						colors: [
							{ offset: 0, color: "#FFFFFF" },
							{ offset: 0, color: "#", opacity: 0.1 },
						],
					},
				]}
			/>
		</div>
	);
}

export default SalesCard;
