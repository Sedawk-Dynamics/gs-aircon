import { partsSystems } from "@/lib/company-data"

const details: Record<string, { overview: string; components: string[]; selection: string[] }> = {
  compressors: {
    overview: "The compressor is central to the chiller's refrigeration circuit. GS Aircon supports screw and centrifugal compressor requirements, from replacement assemblies to overhaul-related parts. Selection starts with the exact compressor model and the condition of the existing machine.",
    components: ["Screw and centrifugal compressor assemblies", "Bearings, shaft seals and gasket sets", "Model-specific internal components for overhaul enquiries"],
    selection: ["Chiller and compressor model, serial number and nameplate photographs", "Existing part number and required quantity", "Refrigerant type and available service or failure history"],
  },
  "motors-drives": {
    overview: "Motors and drives power and regulate the rotating equipment in a chiller plant. A replacement needs to suit both the mechanical installation and the electrical controls. Share the existing motor or drive details so the requirement can be assessed before a quotation.",
    components: ["Compressor and condenser fan motor enquiries", "Variable frequency drives and associated drive components", "Motor-related replacement components matched to the equipment"],
    selection: ["Motor power, voltage, frequency and nameplate current", "Frame, mounting arrangement, shaft dimensions and speed", "Drive model, control interface and existing fault information"],
  },
  "control-systems": {
    overview: "Chiller controls coordinate operation, display operating conditions and manage equipment alarms. Replacement boards and panels must match the installed controller platform and its configuration. Clear photographs of labels and connections help identify the correct revision.",
    components: ["Chiller controller and input/output boards", "Operator displays and HMI panels", "Control panel replacement and retrofit enquiries"],
    selection: ["Chiller model and controller manufacturer", "Board part number, hardware revision and software version if available", "Alarm details and photographs of the existing panel"],
  },
  sensors: {
    overview: "Temperature and pressure sensors provide the readings used by chiller controls. A physically similar sensor may have a different output or measuring range, so identification should include its electrical and mechanical specifications.",
    components: ["Temperature probes for chiller monitoring", "Pressure transducers and pressure switches", "Model-specific sensor replacement enquiries"],
    selection: ["Original sensor part number and application", "Measuring range, supply voltage and output signal", "Connector, cable length and process connection details"],
  },
  valves: {
    overview: "Valves regulate refrigerant flow and isolate parts of the cooling circuit. Expansion and solenoid valve enquiries are assessed against the original assembly and operating application, including actuator or coil requirements.",
    components: ["Electronic and thermostatic expansion valve enquiries", "Solenoid valves and matched coils", "Compatible valve service components where available"],
    selection: ["Valve make, model and refrigerant type", "Connection size and existing assembly photographs", "Coil voltage or actuator and controller details"],
  },
  "oil-filtration": {
    overview: "Refrigeration oil and filtration components are selected for the specific compressor and refrigerant system. Correct identification helps avoid unsuitable oil substitutions and mismatched filter elements during planned servicing or an overhaul.",
    components: ["Refrigeration oil enquiries by specified grade", "Compressor oil filters and replacement elements", "Filter driers and related service consumables"],
    selection: ["Compressor model and manufacturer-specified oil grade", "Filter part number, dimensions and housing details", "Required quantity and planned maintenance scope"],
  },
  "heat-exchangers": {
    overview: "Condensers, evaporators and coils transfer heat between the chiller and its surroundings or water circuit. Replacement and service requirements depend on the exchanger construction, connection arrangement and available installation space.",
    components: ["Condenser and evaporator replacement enquiries", "Air-cooled condenser coils", "Heat exchanger service parts and gasket enquiries"],
    selection: ["Chiller model and exchanger identification", "Dimensions, connection locations and photographs", "Existing drawings, material details and reported condition if available"],
  },
  "bms-integration": {
    overview: "Building management integration connects chiller operating information with a site's central monitoring system. GS Aircon supports monitoring and controls enquiries, with scope defined around the existing chiller controller and the site's required data points.",
    components: ["Controller communication interface enquiries", "Monitoring and controls integration support", "Gateway and interface requirements for existing plant systems"],
    selection: ["Chiller controller and BMS platform details", "Available communication protocol and interface documentation", "Required monitoring points, alarms and permitted control functions"],
  },
}

export const spareParts = partsSystems.map((part) => ({ ...part, ...details[part.slug] }))
export const getPartBySlug = (slug: string) => spareParts.find((part) => part.slug === slug)
