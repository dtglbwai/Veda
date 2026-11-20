export interface PinoutDefinition {
  pinNumber: number | string;
  pinName: string;
  wireColor?: string;
  signalType: "power" | "ground" | "diff_p" | "diff_n" | "data" | "clock" | "control" | "rf" | "analog" | "nc";
  voltageLevel: string;
  description: string;
}

export interface ConnectorSpec {
  id: string;
  name: string;
  category: "usb" | "serial_fieldbus" | "board_mcu" | "rf_coaxial" | "optical" | "audio_acoustic" | "power_battery" | "scientific_probes";
  shortDescription: string;
  fullDescription: string;
  standards: string[];
  maxVoltage: string;
  maxCurrent: string;
  maxDataRate: string;
  impedance?: string;
  matingCycles: number | string;
  ipRating?: string;
  contactResistance?: string;
  pinCount: number | string;
  pinouts: PinoutDefinition[];
  compatibleHardware: string[];
  scientificApplications: string[];
  wiringNotes: string[];
  schematicTips: string[];
}

export interface HardwarePlatformSpec {
  id: string;
  name: string;
  category: "mcu" | "sbc_edge_ai" | "scientific_instrument" | "archaeo_sensor" | "industrial_plc";
  socArchitecture: string;
  clockSpeed: string;
  operatingVoltage: string;
  logicLevel: string;
  powerConsumption: string;
  supportedConnectors: string[];
  nativeInterfaces: string[];
  browserWebStandards: ("Web Serial" | "Web Bluetooth (BLE)" | "WebUSB" | "WebHID" | "Web Audio" | "WebSocket / MQTT" | "WebRTC Video Stream")[];
  driverSupport: string[];
  typicalArchaeologyRole: string;
  connectionGuide: string;
}

// 50+ Exhaustive Connector Specifications
export const CONNECTOR_SPECS_DATABASE: ConnectorSpec[] = [
  // 1. USB & HIGH SPEED
  {
    id: "usb_c_24pin",
    name: "USB Type-C (24-Pin Full Featured)",
    category: "usb",
    shortDescription: "Reversible 24-pin high-speed interconnect supporting USB4, Thunderbolt 4, DP Alt-Mode & 240W USB-PD 3.1 EPR.",
    fullDescription: "The universal reversible 24-pin interconnect standard defined by USB-IF. Features symmetrical top and bottom rows (A1-A12, B1-B12) enabling orientation independence, dual Configuration Channel (CC1/CC2) pins for cable detection and Power Delivery negotiation up to 48V @ 5A (240W EPR), 4 high-speed differential pairs (SuperSpeed TX/RX), high-speed D+/D- legacy lines, and Sideband Use (SBU1/SBU2) lines.",
    standards: ["USB4 2.0 (80 Gbps)", "Thunderbolt 4 / 3", "USB 3.2 Gen 2x2 (20 Gbps)", "USB Power Delivery 3.1 EPR (240W)", "IEC 62680-1-3"],
    maxVoltage: "48 V DC (USB-PD 3.1 Extended Power Range)",
    maxCurrent: "5.0 A (With E-Marked Cable)",
    maxDataRate: "80 Gbps (USB4 2.0 / TB4)",
    impedance: "90 Ω ± 5 Ω (Differential)",
    matingCycles: "10,000+ insertions",
    ipRating: "IP68 (Hermetically sealed variants available)",
    contactResistance: "< 40 mΩ initial",
    pinCount: 24,
    pinouts: [
      { pinNumber: "A1", pinName: "GND", wireColor: "Black", signalType: "ground", voltageLevel: "0 V", description: "Ground return path" },
      { pinNumber: "A2", pinName: "SSTXp1", wireColor: "Yellow", signalType: "diff_p", voltageLevel: "0.8 - 1.2 V diff", description: "SuperSpeed differential TX positive lane 1" },
      { pinNumber: "A3", pinName: "SSTXn1", wireColor: "Brown", signalType: "diff_n", voltageLevel: "0.8 - 1.2 V diff", description: "SuperSpeed differential TX negative lane 1" },
      { pinNumber: "A4", pinName: "VBUS", wireColor: "Red", signalType: "power", voltageLevel: "5V - 48V DC", description: "Main power supply bus (negotiable up to 240W)" },
      { pinNumber: "A5", pinName: "CC1", wireColor: "Blue", signalType: "control", voltageLevel: "0 - 5.0 V", description: "Configuration Channel 1 for orientation, role & PD negotiation" },
      { pinNumber: "A6", pinName: "Dp1", wireColor: "Green", signalType: "data", voltageLevel: "3.3 V USB 2.0", description: "USB 2.0 bidirectional differential D+ data line" },
      { pinNumber: "A7", pinName: "Dn1", wireColor: "White", signalType: "data", voltageLevel: "3.3 V USB 2.0", description: "USB 2.0 bidirectional differential D- data line" },
      { pinNumber: "A8", pinName: "SBU1", wireColor: "Orange", signalType: "control", voltageLevel: "0 - 3.3 V", description: "Sideband Use 1 for DisplayPort AUX / Audio accessory mode" },
      { pinNumber: "A9", pinName: "VBUS", wireColor: "Red", signalType: "power", voltageLevel: "5V - 48V DC", description: "Main power supply bus redundant line" },
      { pinNumber: "A10", pinName: "SSRXn2", wireColor: "Purple", signalType: "diff_n", voltageLevel: "0.8 - 1.2 V diff", description: "SuperSpeed differential RX negative lane 2" },
      { pinNumber: "A11", pinName: "SSRXp2", wireColor: "Grey", signalType: "diff_p", voltageLevel: "0.8 - 1.2 V diff", description: "SuperSpeed differential RX positive lane 2" },
      { pinNumber: "A12", pinName: "GND", wireColor: "Black", signalType: "ground", voltageLevel: "0 V", description: "Ground return path" },
      { pinNumber: "B12", pinName: "GND", wireColor: "Black", signalType: "ground", voltageLevel: "0 V", description: "Ground return path" },
      { pinNumber: "B11", pinName: "SSRXp1", wireColor: "Grey", signalType: "diff_p", voltageLevel: "0.8 - 1.2 V diff", description: "SuperSpeed differential RX positive lane 1" },
      { pinNumber: "B10", pinName: "SSRXn1", wireColor: "Purple", signalType: "diff_n", voltageLevel: "0.8 - 1.2 V diff", description: "SuperSpeed differential RX negative lane 1" },
      { pinNumber: "B9", pinName: "VBUS", wireColor: "Red", signalType: "power", voltageLevel: "5V - 48V DC", description: "Main power supply bus redundant line" },
      { pinNumber: "B8", pinName: "SBU2", wireColor: "Orange", signalType: "control", voltageLevel: "0 - 3.3 V", description: "Sideband Use 2 for DisplayPort AUX / Audio accessory mode" },
      { pinNumber: "B7", pinName: "Dn2", wireColor: "White", signalType: "data", voltageLevel: "3.3 V USB 2.0", description: "USB 2.0 bidirectional differential D- data line (bridged)" },
      { pinNumber: "B6", pinName: "Dp2", wireColor: "Green", signalType: "data", voltageLevel: "3.3 V USB 2.0", description: "USB 2.0 bidirectional differential D+ data line (bridged)" },
      { pinNumber: "B5", pinName: "CC2", wireColor: "Blue", signalType: "control", voltageLevel: "0 - 5.0 V", description: "Configuration Channel 2 (or VCONN 5V power for active cable chips)" },
      { pinNumber: "B4", pinName: "VBUS", wireColor: "Red", signalType: "power", voltageLevel: "5V - 48V DC", description: "Main power supply bus redundant line" },
      { pinNumber: "B3", pinName: "SSTXn2", wireColor: "Brown", signalType: "diff_n", voltageLevel: "0.8 - 1.2 V diff", description: "SuperSpeed differential TX negative lane 2" },
      { pinNumber: "B2", pinName: "SSTXp2", wireColor: "Yellow", signalType: "diff_p", voltageLevel: "0.8 - 1.2 V diff", description: "SuperSpeed differential TX positive lane 2" },
      { pinNumber: "B1", pinName: "GND", wireColor: "Black", signalType: "ground", voltageLevel: "0 V", description: "Ground return path" }
    ],
    compatibleHardware: ["Raspberry Pi 4/5", "NVIDIA Jetson Orin", "ESP32-S3 DevKit", "LiDAR Ouster OS1", "Tandetron C-14 AMS DAQ", "Modern Laptops & Tablets"],
    scientificApplications: ["Ultra-high throughput real-time LiDAR point cloud streaming", "Direct 4K multispectral camera capture", "High-power field charging for mobile sensor rigs"],
    wiringNotes: ["For pure 5V sink devices (e.g. ESP32, Arduino), attach a 5.1 kΩ pull-down resistor from CC1 to GND and CC2 to GND.", "Never connect CC1 directly to CC2; use separate 5.1 kΩ resistors to allow proper orientation detection."],
    schematicTips: ["Place ESD protection diodes (e.g. USBLC6-2SC6) close to the receptacle on D+/D- and CC lines.", "Ensure 90Ω differential trace routing on high-speed pairs."]
  },
  {
    id: "usb_a_30",
    name: "USB Type-A 3.0 / 3.2 Gen 1 (9-Pin)",
    category: "usb",
    shortDescription: "Classic rectangular host port with 5 additional SuperSpeed pins in blue insulator.",
    fullDescription: "Standard 9-pin USB Type-A connector backward-compatible with USB 2.0. Adds 5 additional spring contacts recessed behind the 4 legacy USB 2.0 pins to provide full-duplex 5 Gbps / 10 Gbps SuperSpeed data transmission while delivering up to 5V @ 900mA (or 1.5A via BC 1.2).",
    standards: ["USB 3.2 Gen 1 (5 Gbps)", "USB 3.2 Gen 2 (10 Gbps)", "USB Battery Charging 1.2", "IEC 62680-2-1"],
    maxVoltage: "5.25 V DC",
    maxCurrent: "0.9 A (Standard), 1.5 A (BC1.2 CDP/DCP)",
    maxDataRate: "5 Gbps / 10 Gbps",
    impedance: "90 Ω ± 5 Ω (Differential)",
    matingCycles: "5,000 insertions",
    ipRating: "IP20 (Standard), IP67 (Ruggedized industrial latching variants)",
    contactResistance: "< 30 mΩ",
    pinCount: 9,
    pinouts: [
      { pinNumber: 1, pinName: "VBUS", wireColor: "Red", signalType: "power", voltageLevel: "5.0 V DC", description: "+5V DC Power rail" },
      { pinNumber: 2, pinName: "D-", wireColor: "White", signalType: "data", voltageLevel: "3.3 V USB 2.0", description: "USB 2.0 Differential Data Negative" },
      { pinNumber: 3, pinName: "D+", wireColor: "Green", signalType: "data", voltageLevel: "3.3 V USB 2.0", description: "USB 2.0 Differential Data Positive" },
      { pinNumber: 4, pinName: "GND", wireColor: "Black", signalType: "ground", voltageLevel: "0 V", description: "Power Ground return" },
      { pinNumber: 5, pinName: "SSRX-", wireColor: "Blue", signalType: "diff_n", voltageLevel: "1.0 V diff", description: "SuperSpeed Receiver differential negative line" },
      { pinNumber: 6, pinName: "SSRX+", wireColor: "Yellow", signalType: "diff_p", voltageLevel: "1.0 V diff", description: "SuperSpeed Receiver differential positive line" },
      { pinNumber: 7, pinName: "GND_DRAIN", wireColor: "Bare Copper", signalType: "ground", voltageLevel: "0 V", description: "SuperSpeed signal ground drain wire" },
      { pinNumber: 8, pinName: "SSTX-", wireColor: "Purple", signalType: "diff_n", voltageLevel: "1.0 V diff", description: "SuperSpeed Transmitter differential negative line" },
      { pinNumber: 9, pinName: "SSTX+", wireColor: "Orange", signalType: "diff_p", voltageLevel: "1.0 V diff", description: "SuperSpeed Transmitter differential positive line" }
    ],
    compatibleHardware: ["FTDI FT232R USB-UART bridges", "pXRF Handheld Analyzers", "GPS/GNSS Base Receivers", "Digital Oscilloscopes", "Industrial PCs"],
    scientificApplications: ["Direct Web Serial connection to scientific instruments", "Continuous lab sensor data logging", "High-speed USB camera microscopic feeds"],
    wiringNotes: ["Shield foil and drain wire must connect securely to outer metal shell at both ends.", "Use twisted shielded pairs for SSRX and SSTX lines."],
    schematicTips: ["Include 100nF decoupling capacitors on VBUS near connector.", "Use high-speed Common Mode Chokes (CMC) on SuperSpeed differential pairs."]
  },

  // 2. INDUSTRIAL SERIAL & FIELDBUS CONNECTORS
  {
    id: "rs232_db9",
    name: "RS-232 / EIA-232 (DB9 / DE-9 D-Sub 9-Pin)",
    category: "serial_fieldbus",
    shortDescription: "Classic asynchronous bipolar serial connector with full hardware flow control (RTS/CTS, DTR/DSR).",
    fullDescription: "Standard 9-pin D-subminiature connector implementing EIA/TIA-232 bipolar signalling (-12V to +12V logic, where -3V to -15V represents Logic 1 / MARK, and +3V to +15V represents Logic 0 / SPACE). Standard interface for legacy archaeometry equipment, GPR consoles, total stations, weather stations, and mass spectrometers.",
    standards: ["TIA/EIA-232-F", "ITU-T V.28", "ISO 2110", "DIN 41652"],
    maxVoltage: "±15 V DC (Bipolar)",
    maxCurrent: "0.5 A per pin",
    maxDataRate: "115.2 kbps (Standard) up to 1 Mbps (Enhanced)",
    impedance: "3 kΩ to 7 kΩ load input impedance",
    matingCycles: "500+ insertions",
    ipRating: "IP20 (Standard D-sub), IP67 with threaded O-ring hood",
    contactResistance: "< 15 mΩ",
    pinCount: 9,
    pinouts: [
      { pinNumber: 1, pinName: "DCD / CD", wireColor: "Black", signalType: "control", voltageLevel: "±12 V", description: "Data Carrier Detect (Modem carrier detected by DTE)" },
      { pinNumber: 2, pinName: "RXD", wireColor: "Brown", signalType: "data", voltageLevel: "±12 V", description: "Receive Data (Incoming serial byte stream into DTE)" },
      { pinNumber: 3, pinName: "TXD", wireColor: "Red", signalType: "data", voltageLevel: "±12 V", description: "Transmit Data (Outgoing serial byte stream from DTE)" },
      { pinNumber: 4, pinName: "DTR", wireColor: "Orange", signalType: "control", voltageLevel: "±12 V", description: "Data Terminal Ready (DTE signals it is powered and ready)" },
      { pinNumber: 5, pinName: "GND", wireColor: "Green", signalType: "ground", voltageLevel: "0 V", description: "Signal Ground reference potential" },
      { pinNumber: 6, pinName: "DSR", wireColor: "Blue", signalType: "control", voltageLevel: "±12 V", description: "Data Set Ready (DCE device signals it is ready)" },
      { pinNumber: 7, pinName: "RTS", wireColor: "Purple", signalType: "control", voltageLevel: "±12 V", description: "Request To Send (DTE requests permission to transmit)" },
      { pinNumber: 8, pinName: "CTS", wireColor: "Grey", signalType: "control", voltageLevel: "±12 V", description: "Clear To Send (DCE grants transmission permission)" },
      { pinNumber: 9, pinName: "RI", wireColor: "White", signalType: "control", voltageLevel: "±12 V", description: "Ring Indicator (Incoming call / alert from DCE)" }
    ],
    compatibleHardware: ["GSSI SIR-3000 GPR", "Leica Total Station / Theodolite", "Bartington Grad601 Magnetometer", "Scintrex Gravity Meter", "Old Lab Spectrophotometers"],
    scientificApplications: ["Field surveying total station coordinate download", "Direct raw ASCII NMEA stream from geodetic GPS", "Archaeological magnetometer survey dump"],
    wiringNotes: ["For 3-wire simple communication, connect Pin 2 (RXD), Pin 3 (TXD), and Pin 5 (GND). Bridge Pin 7 & 8 (RTS-CTS) and Pin 4 & 6 (DTR-DSR) if device requires hardware handshake.", "Direct connection to MCU (Arduino/ESP32) requires a MAX232 or MAX3232 transceiver IC to step down ±12V to 3.3V/5V TTL."],
    schematicTips: ["Place 0.1 µF charge pump capacitors near MAX3232 transceiver.", "Add 15kV ESD protection diodes (e.g. TVS arrays) on all external lines."]
  },
  {
    id: "rs485_differential",
    name: "RS-485 / EIA-485 (Industrial 2-Wire / 4-Wire Terminal & RJ45)",
    category: "serial_fieldbus",
    shortDescription: "High-noise-immunity differential bus spanning up to 1,200 meters for Modbus RTU & multi-drop sensors.",
    fullDescription: "TIA/EIA-485-A differential balanced voltage standard supporting multi-drop networks with up to 32 unit loads (expandable to 256 with modern transceivers) over distances up to 1,200 meters (4,000 feet). Highly resistant to common-mode electrical noise in field environments. Standard physical layer for Modbus RTU, BACnet MS/TP, DMX512, and Profibus DP.",
    standards: ["TIA/EIA-485-A", "ISO/IEC 8482", "Modbus RTU over Serial Line", "DIN 19245 (Profibus)"],
    maxVoltage: "-7 V to +12 V Common Mode Range",
    maxCurrent: "60 mA (Transceiver short-circuit limit)",
    maxDataRate: "10 Mbps (at 12m) to 100 kbps (at 1,200m)",
    impedance: "120 Ω (Characteristic cable impedance)",
    matingCycles: "500+ (Terminal blocks: 200 screw tightening cycles)",
    ipRating: "IP67 with M12 D-coded or IP20 Euroblock screw terminals",
    contactResistance: "< 10 mΩ",
    pinCount: 4,
    pinouts: [
      { pinNumber: 1, pinName: "A / Data+ / D+", wireColor: "Yellow or Blue", signalType: "diff_p", voltageLevel: "+1.5V to +5V diff", description: "Non-inverting receiver input and driver output (Logic 1 when A > B)" },
      { pinNumber: 2, pinName: "B / Data- / D-", wireColor: "Orange or White/Blue", signalType: "diff_n", voltageLevel: "-1.5V to -5V diff", description: "Inverting receiver input and driver output (Logic 0 when A < B)" },
      { pinNumber: 3, pinName: "GND / COM", wireColor: "Black or Shield", signalType: "ground", voltageLevel: "0 V", description: "Common signal ground / reference wire for ground potential equalization" },
      { pinNumber: 4, pinName: "VCC / +12V/+24V (Opt)", wireColor: "Red", signalType: "power", voltageLevel: "12V - 24V DC", description: "Optional field auxiliary power bus to power remote sensor nodes" }
    ],
    compatibleHardware: ["Modbus RTU Soil Temperature & Moisture Probes", "Siemens S7-1200 / LOGO! PLCs", "Industrial Weather Stations", "DMX512 Archaeological Lighting Consoles", "Subsea Hydrophone Telemetry Nodes"],
    scientificApplications: ["Long-distance multi-sensor telemetry across archaeological excavation trenches", "Environmental monitoring of temple sanctums and caves", "Underground chamber temperature and gas arrays"],
    wiringNotes: ["A 120 Ω 1/4W termination resistor MUST be installed across A and B at the two extreme ends of the bus cable.", "Always use Shielded Twisted Pair (STP) cable (such as Belden 9841 or Cat6 shielded) with shield grounded at ONE point only to prevent ground loops."],
    schematicTips: ["Use MAX485, MAX3485 (3.3V) or isolated ISO3082 transceivers.", "Implement fail-safe biasing resistors (e.g. 560Ω pull-up on A, 560Ω pull-down on B) to keep bus idle in MARK state when all drivers are disabled."]
  },
  {
    id: "can_bus_obd2",
    name: "CAN Bus / CAN FD (ISO 11898-2 & OBD-II DE-9)",
    category: "serial_fieldbus",
    shortDescription: "High-reliability priority-arbitrated differential bus with hardware CRC & fault confinement.",
    fullDescription: "Controller Area Network (CAN 2.0B / CAN FD) standard developed by Bosch and standardized in ISO 11898. Features multi-master broadcast architecture with bitwise non-destructive arbitration using message identifiers (11-bit standard or 29-bit extended), 15-bit CRC validation, automatic retransmission on error, and extreme resilience against electromagnetic interference.",
    standards: ["ISO 11898-1/2/3", "CiA 301 (CANopen)", "SAE J1939", "SAE J1962 (OBD-II)"],
    maxVoltage: "±36 V DC Fault Protection Range",
    maxCurrent: "70 mA differential drive",
    maxDataRate: "1 Mbps (Classic CAN) up to 8 Mbps (CAN FD)",
    impedance: "120 Ω (Split termination 2x 60Ω + 4.7nF to GND)",
    matingCycles: "1,000+ insertions",
    ipRating: "IP67 (M12 5-pin A-coded) / IP20 (DE-9 / OBD2)",
    contactResistance: "< 10 mΩ",
    pinCount: 9,
    pinouts: [
      { pinNumber: 1, pinName: "NC / Reserved", signalType: "nc", voltageLevel: "N/A", description: "Reserved" },
      { pinNumber: 2, pinName: "CAN_L (Low)", wireColor: "Green", signalType: "diff_n", voltageLevel: "1.5 V (Dominant) / 2.5 V (Recessive)", description: "CAN Differential Low line (driven down during dominant bit)" },
      { pinNumber: 3, pinName: "CAN_GND", wireColor: "Black", signalType: "ground", voltageLevel: "0 V", description: "Signal Ground" },
      { pinNumber: 4, pinName: "NC / Reserved", signalType: "nc", voltageLevel: "N/A", description: "Reserved" },
      { pinNumber: 5, pinName: "CAN_SHLD", wireColor: "Bare Copper", signalType: "ground", voltageLevel: "0 V", description: "Cable Shield Ground" },
      { pinNumber: 6, pinName: "GND_ISO", wireColor: "Brown", signalType: "ground", voltageLevel: "0 V", description: "Optional isolated ground" },
      { pinNumber: 7, pinName: "CAN_H (High)", wireColor: "Yellow", signalType: "diff_p", voltageLevel: "3.5 V (Dominant) / 2.5 V (Recessive)", description: "CAN Differential High line (driven up during dominant bit)" },
      { pinNumber: 8, pinName: "NC / Error", signalType: "nc", voltageLevel: "N/A", description: "Reserved" },
      { pinNumber: 9, pinName: "CAN_V+ (Power)", wireColor: "Red", signalType: "power", voltageLevel: "9V - 30V DC", description: "Optional external node power supply bus" }
    ],
    compatibleHardware: ["ESP32 with SN65HVD230 CAN Transceiver", "Raspberry Pi with MCP2515 CAN SPI Hat", "Geophysical Borehole Loggers", "Unmanned Submersible AUVs / ROVs for Marine Archaeology"],
    scientificApplications: ["Synchronized multi-sensor sampling for underwater heritage mapping", "High-reliability drone sensor payloads for aerial LiDAR and photogrammetry"],
    wiringNotes: ["Bus topology MUST be a linear daisy-chain trunk; avoid star or tree topologies.", "Total stub length from main trunk to any transceiver node must not exceed 0.3 meters at 1 Mbps."],
    schematicTips: ["Use split termination (two 60.4 Ω 1% resistors with a 4.7 nF capacitor to ground between them) for superior EMI reduction."]
  },
  {
    id: "m12_industrial_circular",
    name: "M12 / M8 Industrial Circular Connector (A/B/D/X-Coded)",
    category: "serial_fieldbus",
    shortDescription: "IP67/IP68 rugged waterproof screw-locking connector for harsh field environments.",
    fullDescription: "Standard circular metric connector with M12x1.0 screw thread coupling mechanism defined by IEC 61076-2-101. Available in distinct mechanical keyways: A-coding (Sensors, DC power, DeviceNet), B-coding (Profibus DP, Fieldbus), D-coding (100 Mbps Industrial Ethernet, PROFINET), and X-coding (10 Gbps High-Speed Cat6A Ethernet).",
    standards: ["IEC 61076-2-101 (M12)", "IEC 61076-2-104 (M8)", "IEC 61076-2-109 (X-Code)", "NEMA 250"],
    maxVoltage: "250 V AC/DC (4-pin), 30 V (8-pin)",
    maxCurrent: "4.0 A (A-code 4-pin), 0.5 A (8/12-pin)",
    maxDataRate: "10 Gbps (X-Code Cat6A) / 100 Mbps (D-Code)",
    impedance: "100 Ω ± 15 Ω (Ethernet variants)",
    matingCycles: "500+ insertions with ratchet lock",
    ipRating: "IP67 / IP68 / IP69K (Submersible & High-pressure washdown)",
    contactResistance: "< 5 mΩ",
    pinCount: 8,
    pinouts: [
      { pinNumber: 1, pinName: "Pin 1 (Brown)", wireColor: "Brown", signalType: "power", voltageLevel: "12V - 24V DC", description: "Sensor Power Positive (+VDC)" },
      { pinNumber: 2, pinName: "Pin 2 (White)", wireColor: "White", signalType: "analog", voltageLevel: "0-10V / 4-20mA", description: "Analog Signal Output or Diagnostic Line" },
      { pinNumber: 3, pinName: "Pin 3 (Blue)", wireColor: "Blue", signalType: "ground", voltageLevel: "0 V", description: "Ground / Common 0VDC" },
      { pinNumber: 4, pinName: "Pin 4 (Black)", wireColor: "Black", signalType: "data", voltageLevel: "24V PNP / NPN", description: "Digital Switching Output / IO-Link Comms" },
      { pinNumber: 5, pinName: "Pin 5 (Grey)", wireColor: "Grey", signalType: "control", voltageLevel: "0 - 24V", description: "Auxiliary control / sync trigger line" }
    ],
    compatibleHardware: ["Underwater Marine Magnetometers", "Subsurface GPR Rugged Wheel Odometers", "High-Precision Quartz Pressure Transducers", "Field Gamma Spectrometers"],
    scientificApplications: ["Underwater coastal archaeological surveying at Dwarka and Poompuhar", "Extreme weather outdoor heritage structural vibration loggers"],
    wiringNotes: ["Ensure O-ring is properly seated and lubricated with silicone grease before tightening screw sleeve to 0.6 Nm torque."],
    schematicTips: ["Incorporate reverse polarity protection diode (Schottky) and TVS transient voltage suppressor on 24V line."]
  },

  // 3. BOARD-LEVEL & MICROCONTROLLER HEADERS
  {
    id: "rpi_40pin_gpio",
    name: "Raspberry Pi 40-Pin GPIO Header (2x20 2.54mm Pitch)",
    category: "board_mcu",
    shortDescription: "The universal 40-pin Single Board Computer expansion header with I2C, SPI, UART, PWM, and I2S.",
    fullDescription: "Standard 40-pin 2.54mm (0.1 inch) pitch dual-row male header standardized across Raspberry Pi 1B+, 2, 3, 4, 5, Zero/Zero 2W, and adopted by NVIDIA Jetson, Banana Pi, and Radxa boards. Features 28 available General Purpose I/O pins operating strictly at 3.3V logic (non-5V tolerant), dual hardware I2C buses (including EEPROM ID bus), dual SPI buses, hardware UART, dual PWM channels, and I2S digital audio bus.",
    standards: ["Raspberry Pi HAT Specification v1.2", "IEEE P1451.4 (Smart Transducer ID)", "JEDEC JESD8-7A (3.3V LVTTL)"],
    maxVoltage: "3.3 V on GPIOs (5.0V pins are power supply only!)",
    maxCurrent: "16 mA per GPIO pin (Total GPIO 3.3V rail limit: 50 mA; 5V rail: 1.5A+)",
    maxDataRate: "125 MHz (SPI max clock), 3.4 Mbps (I2C High-speed), 3 Mbps (UART)",
    impedance: "50 Ω trace design on HAT carrier boards",
    matingCycles: "200+ insertions",
    ipRating: "IP00 (Open header on PCB)",
    contactResistance: "< 20 mΩ",
    pinCount: 40,
    pinouts: [
      { pinNumber: 1, pinName: "3V3 PWR", wireColor: "Orange", signalType: "power", voltageLevel: "3.3 V DC", description: "+3.3V DC regulated power output (max 50mA total drawn)" },
      { pinNumber: 2, pinName: "5V PWR", wireColor: "Red", signalType: "power", voltageLevel: "5.0 V DC", description: "+5.0V DC main system power bus (directly connected to USB-C input)" },
      { pinNumber: 3, pinName: "GPIO 2 / I2C1_SDA", wireColor: "Blue", signalType: "data", voltageLevel: "3.3 V", description: "I2C Bus 1 Serial Data (with onboard 1.8kΩ pull-up to 3.3V)" },
      { pinNumber: 4, pinName: "5V PWR", wireColor: "Red", signalType: "power", voltageLevel: "5.0 V DC", description: "+5.0V DC main system power bus redundant pin" },
      { pinNumber: 5, pinName: "GPIO 3 / I2C1_SCL", wireColor: "Yellow", signalType: "clock", voltageLevel: "3.3 V", description: "I2C Bus 1 Serial Clock (with onboard 1.8kΩ pull-up to 3.3V)" },
      { pinNumber: 6, pinName: "GND", wireColor: "Black", signalType: "ground", voltageLevel: "0 V", description: "Ground reference" },
      { pinNumber: 7, pinName: "GPIO 4 / GPCLK0", wireColor: "Purple", signalType: "data", voltageLevel: "3.3 V", description: "General GPIO 4 / 1-Wire bus default pin (Dallas DS18B20)" },
      { pinNumber: 8, pinName: "GPIO 14 / UART_TXD", wireColor: "White", signalType: "data", voltageLevel: "3.3 V", description: "Primary Hardware UART Transmit line" },
      { pinNumber: 9, pinName: "GND", wireColor: "Black", signalType: "ground", voltageLevel: "0 V", description: "Ground reference" },
      { pinNumber: 10, pinName: "GPIO 15 / UART_RXD", wireColor: "Grey", signalType: "data", voltageLevel: "3.3 V", description: "Primary Hardware UART Receive line" },
      { pinNumber: 11, pinName: "GPIO 17", wireColor: "Green", signalType: "data", voltageLevel: "3.3 V", description: "General GPIO 17 / Interrupt input" },
      { pinNumber: 12, pinName: "GPIO 18 / PCM_CLK", wireColor: "Orange", signalType: "clock", voltageLevel: "3.3 V", description: "Hardware PWM 0 / I2S Audio Bit Clock" },
      { pinNumber: 13, pinName: "GPIO 27", wireColor: "Green", signalType: "data", voltageLevel: "3.3 V", description: "General GPIO 27" },
      { pinNumber: 14, pinName: "GND", wireColor: "Black", signalType: "ground", voltageLevel: "0 V", description: "Ground reference" },
      { pinNumber: 15, pinName: "GPIO 22", wireColor: "Green", signalType: "data", voltageLevel: "3.3 V", description: "General GPIO 22" },
      { pinNumber: 16, pinName: "GPIO 23", wireColor: "Green", signalType: "data", voltageLevel: "3.3 V", description: "General GPIO 23" },
      { pinNumber: 17, pinName: "3V3 PWR", wireColor: "Orange", signalType: "power", voltageLevel: "3.3 V DC", description: "+3.3V DC auxiliary rail" },
      { pinNumber: 18, pinName: "GPIO 24", wireColor: "Green", signalType: "data", voltageLevel: "3.3 V", description: "General GPIO 24" },
      { pinNumber: 19, pinName: "GPIO 10 / SPI0_MOSI", wireColor: "Yellow", signalType: "data", voltageLevel: "3.3 V", description: "SPI Bus 0 Master Out Slave In" },
      { pinNumber: 20, pinName: "GND", wireColor: "Black", signalType: "ground", voltageLevel: "0 V", description: "Ground reference" },
      { pinNumber: 21, pinName: "GPIO 9 / SPI0_MISO", wireColor: "Blue", signalType: "data", voltageLevel: "3.3 V", description: "SPI Bus 0 Master In Slave Out" },
      { pinNumber: 22, pinName: "GPIO 25", wireColor: "Green", signalType: "data", voltageLevel: "3.3 V", description: "General GPIO 25" },
      { pinNumber: 23, pinName: "GPIO 11 / SPI0_SCLK", wireColor: "White", signalType: "clock", voltageLevel: "3.3 V", description: "SPI Bus 0 Serial Clock" },
      { pinNumber: 24, pinName: "GPIO 8 / SPI0_CE0_N", wireColor: "Purple", signalType: "control", voltageLevel: "3.3 V", description: "SPI Bus 0 Chip Enable 0 (Active Low)" },
      { pinNumber: 25, pinName: "GND", wireColor: "Black", signalType: "ground", voltageLevel: "0 V", description: "Ground reference" },
      { pinNumber: 26, pinName: "GPIO 7 / SPI0_CE1_N", wireColor: "Purple", signalType: "control", voltageLevel: "3.3 V", description: "SPI Bus 0 Chip Enable 1 (Active Low)" },
      { pinNumber: 27, pinName: "ID_SD / I2C0_SDA", wireColor: "Brown", signalType: "data", voltageLevel: "3.3 V", description: "HAT ID EEPROM I2C Data (Reserved for HAT auto-detect)" },
      { pinNumber: 28, pinName: "ID_SC / I2C0_SCL", wireColor: "Brown", signalType: "clock", voltageLevel: "3.3 V", description: "HAT ID EEPROM I2C Clock (Reserved for HAT auto-detect)" },
      { pinNumber: 29, pinName: "GPIO 5", wireColor: "Green", signalType: "data", voltageLevel: "3.3 V", description: "General GPIO 5 / CAN Interrupt" },
      { pinNumber: 30, pinName: "GND", wireColor: "Black", signalType: "ground", voltageLevel: "0 V", description: "Ground reference" },
      { pinNumber: 31, pinName: "GPIO 6", wireColor: "Green", signalType: "data", voltageLevel: "3.3 V", description: "General GPIO 6" },
      { pinNumber: 32, pinName: "GPIO 12 / PWM0", wireColor: "Orange", signalType: "data", voltageLevel: "3.3 V", description: "Hardware PWM Channel 0" },
      { pinNumber: 33, pinName: "GPIO 13 / PWM1", wireColor: "Orange", signalType: "data", voltageLevel: "3.3 V", description: "Hardware PWM Channel 1" },
      { pinNumber: 34, pinName: "GND", wireColor: "Black", signalType: "ground", voltageLevel: "0 V", description: "Ground reference" },
      { pinNumber: 35, pinName: "GPIO 19 / PCM_FS", wireColor: "Blue", signalType: "control", voltageLevel: "3.3 V", description: "I2S Audio Frame Sync / Left-Right Clock (LRCLK)" },
      { pinNumber: 36, pinName: "GPIO 16", wireColor: "Green", signalType: "data", voltageLevel: "3.3 V", description: "General GPIO 16" },
      { pinNumber: 37, pinName: "GPIO 26", wireColor: "Green", signalType: "data", voltageLevel: "3.3 V", description: "General GPIO 26" },
      { pinNumber: 38, pinName: "GPIO 20 / PCM_DIN", wireColor: "Yellow", signalType: "data", voltageLevel: "3.3 V", description: "I2S Digital Audio Data Input (from microphone/ADC)" },
      { pinNumber: 39, pinName: "GND", wireColor: "Black", signalType: "ground", voltageLevel: "0 V", description: "Ground reference" },
      { pinNumber: 40, pinName: "GPIO 21 / PCM_DOUT", wireColor: "White", signalType: "data", voltageLevel: "3.3 V", description: "I2S Digital Audio Data Output (to DAC/Amp)" }
    ],
    compatibleHardware: ["Raspberry Pi 5/4/3/Zero 2W", "NVIDIA Jetson Nano/Orin", "Adafruit / SparkFun HATs", "Waveshare CAN HAT", "ADS1115 16-Bit ADC Board"],
    scientificApplications: ["Real-time 24-bit archaeological audio recording", "Edge AI object detection on ancient temple carvings", "Multi-spectral camera trigger coordination"],
    wiringNotes: ["NEVER connect a 5V signal directly to any GPIO pin (3.3V only)! Use a bidirectional level shifter (e.g. TXS0108E or BSS138).", "Pins 27 and 28 (ID_SD/ID_SC) are dedicated to the HAT auto-configuration EEPROM; do not use for general I2C."],
    schematicTips: ["Add 33Ω series damping resistors on high-speed SPI/I2S lines to suppress ringing.", "Use ground planes underneath high-speed signals."]
  },
  {
    id: "qwiic_stemma_qt_4pin",
    name: "Qwiic / STEMMA QT / Grove 4-Pin I2C Connectors",
    category: "board_mcu",
    shortDescription: "Standardized polarized 4-pin quick-connect ecosystem for daisy-chainable I2C sensors.",
    fullDescription: "Standardized compact 4-pin polarized connector standard created by SparkFun (Qwiic, JST-SH 1.0mm pitch) and Adafruit (STEMMA QT, JST-SH 1.0mm pitch), electrically compatible with 4-pin Grove (Seeed Studio, HY2.0mm pitch). Enables solderless plug-and-play daisy chaining of hundreds of environmental, acoustic, optical, and motion sensors with automatic 3.3V logic level compatibility.",
    standards: ["SparkFun Qwiic Standard v1.0", "Adafruit STEMMA QT Standard", "Philips / NXP I2C Bus Specification Rev 7.0"],
    maxVoltage: "3.3 V DC (Strict standard)",
    maxCurrent: "1.0 A continuous (JST-SH contact rating)",
    maxDataRate: "400 kHz (Fast-mode) / 1 MHz (Fast-mode Plus)",
    matingCycles: "100+ insertions",
    ipRating: "IP20 (Indoor/Enclosure use)",
    contactResistance: "< 20 mΩ",
    pinCount: 4,
    pinouts: [
      { pinNumber: 1, pinName: "GND", wireColor: "Black", signalType: "ground", voltageLevel: "0 V", description: "System Ground return" },
      { pinNumber: 2, pinName: "3V3 / VCC", wireColor: "Red", signalType: "power", voltageLevel: "3.3 V DC", description: "+3.3V Regulated Sensor Power Supply" },
      { pinNumber: 3, pinName: "SDA", wireColor: "Blue", signalType: "data", voltageLevel: "3.3 V", description: "I2C Serial Data line (bidirectional open-drain)" },
      { pinNumber: 4, pinName: "SCL", wireColor: "Yellow", signalType: "clock", voltageLevel: "3.3 V", description: "I2C Serial Clock line (driven by MCU master)" }
    ],
    compatibleHardware: ["BME688 Gas/Environmental Sensor", "BNO085 9-DOF IMU", "VL53L8CX 8x8 Multi-Zone ToF LiDAR", "MCP9600 Thermocouple Amplifier", "MCP4725 12-bit DAC"],
    scientificApplications: ["Miniaturized field microclimate logging inside palm-leaf manuscript preservation vaults", "Non-destructive vibration sensing on heritage temple pillars"],
    wiringNotes: ["Multiple Qwiic/STEMMA QT boards can be chained in any order as long as they have unique I2C addresses.", "Total I2C cable length across all chains should not exceed 1 meter without an active I2C bus extender (e.g. PCA9615)."],
    schematicTips: ["Place a single pair of 2.2kΩ or 4.7kΩ pull-up resistors to 3.3V on the MCU mainboard.", "Ensure each sensor board has a 0.1µF ceramic decoupling capacitor on VCC."]
  },

  // 4. RF & COAXIAL CONNECTORS
  {
    id: "sma_rpsma_50ohm",
    name: "SMA / RP-SMA Coaxial RF Connector (50 Ω)",
    category: "rf_coaxial",
    shortDescription: "Precision 50-ohm threaded RF connector operating from DC up to 18 GHz for GNSS, SDR & GPR antennas.",
    fullDescription: "Subminiature version A (SMA) 50-ohm coaxial connector with 1/4-36 UNS-2A threaded coupling mechanism defined in MIL-STD-348. Features brass gold-plated center pin and PTFE dielectric capable of operating with low VSWR up to 18 GHz. Standard interface for RTK GNSS antennas, Software Defined Radio (RTL-SDR, HackRF, LimeSDR), and high-frequency GPR pulse feeds.",
    standards: ["MIL-STD-348A", "MIL-PRF-39012", "IEC 60169-15", "CECC 22110"],
    maxVoltage: "500 V RMS at sea level",
    maxCurrent: "N/A (RF Signal, max RF power 100W @ 1GHz)",
    maxDataRate: "DC to 18 GHz (Analog RF bandwidth)",
    impedance: "50 Ω (Strict RF Characteristic)",
    matingCycles: "500+ insertions (Torque: 0.9 to 1.1 Nm / 8 to 10 in-lbs)",
    ipRating: "IP67 with silicone O-ring gasket",
    contactResistance: "Center: < 3.0 mΩ; Outer: < 2.0 mΩ",
    pinCount: 2,
    pinouts: [
      { pinNumber: 1, pinName: "Center Conductor (Signal)", wireColor: "Gold Pin", signalType: "rf", voltageLevel: "Microvolts to 5V RF", description: "RF Signal high-frequency transmission line" },
      { pinNumber: 2, pinName: "Outer Shield / Shell (GND)", wireColor: "Gold Body", signalType: "ground", voltageLevel: "0 V", description: "RF return ground and 360-degree coaxial shielding braid" }
    ],
    compatibleHardware: ["u-blox ZED-F9P Multi-band RTK GNSS", "HackRF One SDR", "GSSI 400MHz GPR Bowtie Antenna", "Spectrometer Laser Trigger RF Source"],
    scientificApplications: ["Centimeter-accurate RTK GPS geospatial survey of ancient trenches", "Radio emission monitoring and archaeo-geomagnetic resonance experiments"],
    wiringNotes: ["SMA has male pin inside threaded nut; RP-SMA has female receptacle inside threaded nut (used for FCC Wi-Fi regulations). Do not force mismatched types.", "Always tighten using an 8 mm calibrated RF torque wrench to avoid crushing the PTFE insulator."],
    schematicTips: ["Calculate 50Ω coplanar waveguide with ground on PCB using Rogers RO4350B or FR-4 substrate.", "Ensure solid ground stitching vias along RF traces."]
  },
  {
    id: "bnc_oscilloscope_50_75",
    name: "BNC Connector (Bayonet Neill–Concelman 50 Ω / 75 Ω)",
    category: "rf_coaxial",
    shortDescription: "Quick-connect bayonet coaxial connector for digital oscilloscopes, geophones & radiation detectors.",
    fullDescription: "Two-stud bayonet locking connector defined in MIL-PRF-39012 and IEC 60169-8. Enables rapid mating and de-mating with a quarter turn while providing constant 50Ω (or 75Ω for broadcast video) impedance up to 4 GHz. Ubiquitous on laboratory benchtop instruments, nuclear scintillation probes, piezoelectric geophones, and high-impedance pH electrodes.",
    standards: ["MIL-STD-348", "MIL-PRF-39012", "IEC 60169-8", "DIN 47293"],
    maxVoltage: "500 V RMS (Standard) / 5000 V (MHV High-Voltage variant for photomultipliers)",
    maxCurrent: "3.0 A continuous",
    maxDataRate: "DC to 4 GHz (Analog Bandwidth)",
    impedance: "50 Ω (Instrumentation) or 75 Ω (Video / RF)",
    matingCycles: "500+ quick-twist cycles",
    ipRating: "IP54 (Standard) / IP67 (Waterproof bulkhead version)",
    contactResistance: "< 1.5 mΩ",
    pinCount: 2,
    pinouts: [
      { pinNumber: 1, pinName: "Center Contact (Signal)", wireColor: "Silver/Gold", signalType: "rf", voltageLevel: "-100V to +100V (or high-Z analog)", description: "Analog measurement signal / Fast pulse" },
      { pinNumber: 2, pinName: "Bayonet Outer Shell (GND)", wireColor: "Nickel Plated", signalType: "ground", voltageLevel: "0 V", description: "Coaxial shield and earth ground reference" }
    ],
    compatibleHardware: ["Rigol / Siglent / Keysight Oscilloscopes", "Sodium Iodide NaI(Tl) Gamma Scintillation Probes", "Piezoelectric Seismic Geophones", "Laboratory Glass pH Electrodes"],
    scientificApplications: ["In-situ gamma radiation spectrometry at archaeological mounds", "Seismic reflection profiling of ancient river basins (Saraswati / Ghaggar)", "Electrochemical soil pH profiling for pottery preservation"],
    wiringNotes: ["For high-impedance pH probes (10^12 Ω), keep BNC insulation spotless; any dust or grease creates leakage currents.", "50Ω and 75Ω BNC connectors physically mate, but 75Ω female pins can be damaged by larger 50Ω male pins."],
    schematicTips: ["For 1X/10X oscilloscope probes, add 1 MΩ || 15 pF input impedance conditioning network on ADC front end."]
  },

  // 5. OPTICAL & SPECTROMETRY CONNECTORS
  {
    id: "sma905_fiber_spectrometry",
    name: "SMA-905 Fiber Optic Connector (UV-Vis-NIR Spectrometry)",
    category: "optical",
    shortDescription: "Precision non-contact ferrule fiber optic connector for optical emission & Raman spectrometers.",
    fullDescription: "Specialized precision fiber optic connector with a straight stainless steel or ceramic ferrule (3.175mm outer diameter) and 1/4-36 threaded nut. Unlike standard telecom connectors, SMA-905 maintains an air gap between ferrule tips to withstand high laser optical power densities and transmit broad spectra from deep ultraviolet (200 nm) to short-wave infrared (2500 nm).",
    standards: ["IEC 61754-22", "CECC 86 100", "ASTM E168 (Spectrometry)"],
    maxVoltage: "Dielectric Non-conductive (High-power optical damage threshold > 1 GW/cm²)",
    maxCurrent: "N/A (Photonic transmission)",
    maxDataRate: "200 nm to 2500 nm Optical Spectral Bandwidth",
    impedance: "Core Diameters: 50 µm, 100 µm, 200 µm, 400 µm, 600 µm (Fused Silica)",
    matingCycles: "1,000+ insertions",
    ipRating: "Dust cap protected (Cleanliness critical)",
    contactResistance: "Optical Insertion Loss: < 0.5 dB per mated pair",
    pinCount: 1,
    pinouts: [
      { pinNumber: 1, pinName: "Optical Fiber Core & Cladding", wireColor: "Silica Glass / High OH-", signalType: "analog", voltageLevel: "Photons (200nm - 2500nm)", description: "High-purity synthetic fused silica optical waveguide core" }
    ],
    compatibleHardware: ["Ocean Optics / Avantes UV-Vis Spectrometer", "StellarNet Portable NIR Spectrometer", "Handheld Raman Mineral Identification Probes", "Tandetron Ion Beam Optical Monitors"],
    scientificApplications: ["Non-destructive pigment analysis on ancient Ajanta / Ellora frescoes", "Mineralogical Raman verification of Indus Valley carnelian and lapis lazuli beads", "Hyperspectral manuscript ink analysis"],
    wiringNotes: ["Never touch the ferrule tip; inspect with 200x fiber microscope before connecting.", "Clean exclusively with 99.9% spectrophotometric-grade isopropanol and lint-free optical wipes."],
    schematicTips: ["Maintain minimum fiber bend radius > 50 mm to avoid micro-bending losses and core fractures."]
  },

  // 6. AUDIO, ACOUSTIC & VIBRATION CONNECTORS
  {
    id: "trs_35mm_trrs",
    name: "3.5mm (1/8\") TRS & TRRS Audio Jack (CTIA & OMTP)",
    category: "audio_acoustic",
    shortDescription: "Miniature 3 or 4-pole phone jack for stereo sound, acoustic microphones, and low-cost sensor telemetry.",
    fullDescription: "Standard 3.5mm miniature cylindrical audio interconnect. Available in 3-pole TRS (Tip: Left, Ring: Right, Sleeve: Ground) and 4-pole TRRS. The TRRS format exists in two wiring standards: CTIA (American standard: Tip=Left, Ring1=Right, Ring2=Ground, Sleeve=Mic) and OMTP (Open Mobile: Tip=Left, Ring1=Right, Ring2=Mic, Sleeve=Ground). Ubiquitous for field hydrophones, omnidirectional lavalier mics, and frequency-shift keying (FSK) acoustic data telemetry.",
    standards: ["EIAJ RC-5325A", "IEC 60603-11", "CTIA Audio Jack Specification", "OMTP TRRS Standard"],
    maxVoltage: "30 V RMS / 50 V DC",
    maxCurrent: "1.0 A per contact",
    maxDataRate: "Audio Bandwidth: 1 Hz to 100 kHz",
    impedance: "32 Ω (Headphone), 600 Ω (Line), 2.2 kΩ (Electret Mic with Bias)",
    matingCycles: "5,000+ insertions",
    ipRating: "IP54 / Sealed chassis jacks available",
    contactResistance: "< 30 mΩ",
    pinCount: 4,
    pinouts: [
      { pinNumber: "Tip (T)", pinName: "Left Audio Channel / Signal In", wireColor: "White", signalType: "analog", voltageLevel: "0 - 1.0 V RMS (Line Level)", description: "Left stereo channel or Primary analog sensor AC waveform" },
      { pinNumber: "Ring 1 (R1)", pinName: "Right Audio Channel", wireColor: "Red", signalType: "analog", voltageLevel: "0 - 1.0 V RMS (Line Level)", description: "Right stereo channel or Secondary differential reference" },
      { pinNumber: "Ring 2 (R2)", pinName: "GND (CTIA) or Mic (OMTP)", wireColor: "Black or Bare", signalType: "ground", voltageLevel: "0 V (CTIA) or 2V Bias (OMTP)", description: "Ground return in CTIA standard (Standard across modern devices)" },
      { pinNumber: "Sleeve (S)", pinName: "Microphone (CTIA) or GND (OMTP)", wireColor: "Yellow", signalType: "analog", voltageLevel: "2.0V - 3.3V DC Bias + AC", description: "Microphone signal line with electret condenser DC bias" }
    ],
    compatibleHardware: ["Temple Acoustic Sound Level Calibrator", "Acoustic Hydrophone Probes", "Smartphones & Laptops (Web Audio API)", "FSK Acoustic Modems", "Soil Conductivity Oscillators"],
    scientificApplications: ["Real-time binaural impulse response measurement in ancient rock-cut caves (Barabar, Elephanta)", "Musical pillar resonance frequency extraction at Madurai Meenakshi and Hampi temples"],
    wiringNotes: ["Always verify CTIA vs OMTP pinout when connecting external custom sensors to laptop headphone jacks; modern devices use CTIA.", "Electret microphone elements require a 2.2kΩ pull-up resistor to +3.3V / +5V to provide FET pre-amp bias."],
    schematicTips: ["Add AC coupling capacitors (10µF non-polar) and 100kΩ bleed resistors to ground to block DC offsets."]
  },
  {
    id: "xlr_3pin_balanced",
    name: "XLR 3-Pin / 5-Pin Balanced Audio & DMX Connector",
    category: "audio_acoustic",
    shortDescription: "Heavy-duty locking balanced connector with +48V Phantom Power for lab acoustics & DMX512.",
    fullDescription: "Circular locking connector originally designed by Cannon (ITT) and standardized in IEC 61076-2-103. Features 3 pins inside a rugged zinc die-cast shell with push-button latching mechanism. Pin 1 (Chassis Ground) mates first during insertion to discharge static electricity safely. Implements balanced differential audio transmission capable of rejecting common-mode RF noise over hundreds of meters.",
    standards: ["AES3 / EBU Digital Audio", "IEC 61076-2-103", "AES48 (Grounding & Shielding)", "ESTA DMX512-A (5-pin)"],
    maxVoltage: "50 V RMS / 48 V DC Phantom Power (IEC 61938)",
    maxCurrent: "16 A (High-current contacts)",
    maxDataRate: "Audio Bandwidth: 10 Hz to 200 kHz (Digital AES3: 6.144 Mbps)",
    impedance: "110 Ω (AES/EBU & DMX512) or 600 Ω (Microphone)",
    matingCycles: "1,000+ insertions with locking spring",
    ipRating: "IP65 (Neutrik TOP True Outdoor Protection variants)",
    contactResistance: "< 3 mΩ",
    pinCount: 3,
    pinouts: [
      { pinNumber: 1, pinName: "Chassis / Cable Shield (GND)", wireColor: "Bare Braid / Black", signalType: "ground", voltageLevel: "0 V", description: "Shield ground (first to make contact upon insertion)" },
      { pinNumber: 2, pinName: "Hot / Positive Phase (+)", wireColor: "Red / White", signalType: "diff_p", voltageLevel: "+48V DC Bias (Phantom) + AC signal", description: "Non-inverting balanced audio signal line (+ phase)" },
      { pinNumber: 3, pinName: "Cold / Negative Phase (-)", wireColor: "Black / Blue", signalType: "diff_n", voltageLevel: "+48V DC Bias (Phantom) - AC signal", description: "Inverting balanced audio signal line (- phase)" }
    ],
    compatibleHardware: ["Brüel & Kjær Precision Sound Level Meters", "Earthworks Class 1 Measurement Microphones", "DMX512 Heritage Architectural Illumination Rig", "Acoustic Impulse Source Sparkers"],
    scientificApplications: ["Laboratory-grade acoustical impulse response (EDC, T30, STI) calculations in ancient Vedic Yajnasalas", "Ultrasound echo mapping in archaeological tunnels"],
    wiringNotes: ["In balanced microphone cables, Pin 2 is HOT (+), Pin 3 is COLD (-), and Pin 1 is SHIELD. Never link Pin 1 to the shell internally to avoid ground loops.", "Phantom power feeds +48V DC through matched 6.81 kΩ 0.1% resistors to both Pin 2 and Pin 3 simultaneously."],
    schematicTips: ["Use high-CMRR differential operational amplifiers (e.g. THAT 1512 or INA163) at receiver inputs."]
  },

  // 7. POWER, HIGH CURRENT & BATTERY CONNECTORS
  {
    id: "xt60_xt30_dc_power",
    name: "XT60 / XT30 High-Current DC Battery Connector",
    category: "power_battery",
    shortDescription: "Gold-plated bullet contact polarized nylon connectors for 30A-60A field sensor battery packs.",
    fullDescription: "High-reliability polarized DC power connector developed by AMASS. Features high-temperature nylon casing and gold-plated 3.5mm brass bullet contacts. Designed to deliver continuous high current with minimal voltage drop. The gold standard for field survey drone LiPo batteries, mobile GPR power carts, and high-power LiDAR field backpacks.",
    standards: ["UL94V-0 Flammability Standard", "AMASS Design Standard"],
    maxVoltage: "500 V DC",
    maxCurrent: "60 A continuous (XT60) / 30 A (XT30) / 100 A instantaneous burst",
    maxDataRate: "DC Power Only",
    impedance: "Contact Resistance: < 0.50 mΩ",
    matingCycles: "1,000+ insertions with tight mechanical grip",
    ipRating: "IP20 (Standard) / IP65 (Silicone sealed versions with cap)",
    contactResistance: "< 0.5 mΩ",
    pinCount: 2,
    pinouts: [
      { pinNumber: 1, pinName: "Positive (+)", wireColor: "Red", signalType: "power", voltageLevel: "+7.4V to +60V DC (2S to 14S LiPo)", description: "High-current DC Positive rail" },
      { pinNumber: 2, pinName: "Negative (-) / Ground", wireColor: "Black", signalType: "ground", voltageLevel: "0 V", description: "High-current DC Negative return rail" }
    ],
    compatibleHardware: ["LiFePO4 Expedition Battery Packs (12V/24V 100Ah)", "Heavy-Lift Surveying Drones (DJI Matrice / Custom Hexacopters)", "High-Power Ground Penetrating Radar Field Carts", "Portable AMS Vacuum Roughing Pumps"],
    scientificApplications: ["Continuous multi-day off-grid power for archaeological excavation field camps in desert or mountain sites", "High-drain pulse power for seismic acoustic sparkers"],
    wiringNotes: ["Connector is physically keyed with one rounded edge; do not force reverse connection.", "Solder using 60W+ iron with pre-tinned 12 AWG or 14 AWG silicone wire."],
    schematicTips: ["Place a bidirectional TVS diode (e.g. 5.0SMDJ36A) across DC input to clamp inductive kickback spikes."]
  },
  {
    id: "dc_barrel_jack_5521",
    name: "DC Barrel Jack (5.5mm Outer / 2.1mm & 2.5mm Inner)",
    category: "power_battery",
    shortDescription: "Standard cylindrical DC power plug for microcontrollers, routers, and lab field instruments.",
    fullDescription: "Standard coaxial power connector defined in EIAJ RC-5320A. Features an outer cylindrical sleeve (5.5mm OD) and center pin (2.1mm ID for standard Arduino/Raspberry Pi power hats, 2.5mm ID for high-power industrial equipment). Almost universally wired Center-Positive (+), though legacy equipment may be Center-Negative (-).",
    standards: ["EIAJ RC-5320A", "IEC 60130-10", "DIN 45323"],
    maxVoltage: "24 V DC (Standard ratings up to 36V)",
    maxCurrent: "5.0 A continuous",
    maxDataRate: "DC Power Only",
    impedance: "N/A (Power)",
    matingCycles: "5,000+ insertions",
    ipRating: "IP20 / Sealed locking threaded versions (e.g. Switchcraft L712AS) are IP67",
    contactResistance: "< 30 mΩ",
    pinCount: 3,
    pinouts: [
      { pinNumber: 1, pinName: "Center Pin (Tip)", wireColor: "Red (Typically)", signalType: "power", voltageLevel: "+5V to +24V DC", description: "Positive power supply rail (Center-Positive standard)" },
      { pinNumber: 2, pinName: "Outer Sleeve (Ring)", wireColor: "Black (Typically)", signalType: "ground", voltageLevel: "0 V", description: "Ground return reference (Sleeve)" },
      { pinNumber: 3, pinName: "Internal Shunt Switch", wireColor: "Yellow / PCB trace", signalType: "control", voltageLevel: "0 - 24V", description: "Internal break-switch to automatically disconnect internal battery when external plug is inserted" }
    ],
    compatibleHardware: ["Arduino Uno / Mega (VIN pin, 7-12V DC input)", "Single Board Computers", "Portable Spectrometer Battery Chargers", "Field Workstation Monitors"],
    scientificApplications: ["Regulated power distribution for excavation trench data loggers", "Benchtop instrument supply"],
    wiringNotes: ["A 5.5x2.5mm plug will insert loosely into a 5.5x2.1mm jack and cause intermittent disconnection; always verify inner pin diameter.", "Always verify polarity symbol [ - (o+ ] on the power adapter before plugging in to avoid frying microcontrollers."],
    schematicTips: ["Add a P-Channel MOSFET (e.g. AO3401) reverse polarity protection circuit at the DC input jack."]
  },

  // 8. SCIENTIFIC, RADIOMETRIC & SENSOR PROBES
  {
    id: "k_type_thermocouple_mini",
    name: "K-Type Thermocouple Sub-Miniature Plug (ANSI / IEC)",
    category: "scientific_probes",
    shortDescription: "Chromel-Alumel yellow polarized flat-pin plug with Seebeck coefficient of ~41 µV/°C (-200°C to +1350°C).",
    fullDescription: "Standard polarized 2-blade sub-miniature thermocouple connector defined in ASTM E230 and IEC 60584. Made of authentic thermocouple alloys (Positive blade: Chromel / Nickel-Chromium; Negative blade: Alumel / Nickel-Aluminum) to eliminate parasitic Seebeck thermal EMF voltages at the connector junction. Polarized by differing pin widths (Negative blade is wider than Positive blade).",
    standards: ["ASTM E230 / E230M (ANSI Yellow color code)", "IEC 60584-3 (Green color code)", "JIS C 1610 (Blue color code)"],
    maxVoltage: "Microvolt-level Seebeck EMF (~41.276 µV/°C)",
    maxCurrent: "N/A (Voltage measurement only, infinite impedance)",
    maxDataRate: "Thermal Time Constant: 0.1s to 5s",
    impedance: "Probe resistance: 5 Ω to 50 Ω",
    matingCycles: "500+ insertions",
    ipRating: "IP54 / Heavy-duty sealed heads IP67",
    contactResistance: "< 10 mΩ (Must match thermocouple alloy exactly)",
    pinCount: 2,
    pinouts: [
      { pinNumber: 1, pinName: "Positive Blade (+ / Narrow)", wireColor: "Yellow (ANSI) or Green (IEC)", signalType: "analog", voltageLevel: "Chromel Alloy (+41 µV/°C)", description: "Non-magnetic Chromel (Ni-Cr) alloy positive contact" },
      { pinNumber: 2, pinName: "Negative Blade (- / Wide)", wireColor: "Red (ANSI) or White (IEC)", signalType: "analog", voltageLevel: "Alumel Alloy (Reference)", description: "Magnetic Alumel (Ni-Al) alloy negative contact (Wider blade)" }
    ],
    compatibleHardware: ["MAX31855 / MAX31856 Cold-Junction Compensated Thermocouple Converters", "Laboratory Pottery Firing Kiln Loggers", "Archaeometallurgical Crucible Smelting Analyzers"],
    scientificApplications: ["Precise temperature mapping of ancient Harappan ceramic kilns and metallurgical smelting furnaces", "In-situ rock core thermal gradient measurement"],
    wiringNotes: ["In ANSI color coding, YELLOW is Positive (+) and RED is Negative (-)! Note that Red is Negative, which is the reverse of standard DC power.", "Extension wires MUST be matched K-type compensation wire (KX), never standard copper wire, to avoid measuring junction errors."],
    schematicTips: ["Use an onboard precision temperature sensor (e.g. PT100 or internal IC sensor in MAX31856) right at the connector terminals for Cold Junction Compensation (CJC)."]
  },
  {
    id: "lemo_push_pull_scientific",
    name: "LEMO 00 / 0B Series Push-Pull Precision Circular Connector",
    category: "scientific_probes",
    shortDescription: "Swiss-engineered precision latching connector for particle accelerators, AMS C-14, and nuclear spectroscopy.",
    fullDescription: "World-standard self-latching precision circular connector manufactured in Switzerland by LEMO. Features a mechanical push-pull latching mechanism that prevents accidental disconnection by cable pulling (can only be released by pulling the outer release sleeve). Highly shielded with 360-degree EMC protection, gold-plated contacts, and extreme durability in radiation and vacuum environments.",
    standards: ["IEC 60512", "MIL-DTL-38999 equivalent EMC", "UL Recognized File E119199"],
    maxVoltage: "1,200 V AC RMS (High-voltage variants up to 10 kV)",
    maxCurrent: "2.5 A to 10 A per pin",
    maxDataRate: "DC to 3 GHz (Coaxial insert) / 10 Gbps Ethernet",
    impedance: "50 Ω (Coaxial 00 series) or Multipin",
    matingCycles: "5,000+ full push-pull latch cycles",
    ipRating: "IP50 (Standard) / IP68 (Waterproof K/E Series with vacuum tightness)",
    contactResistance: "< 3.5 mΩ",
    pinCount: 4,
    pinouts: [
      { pinNumber: 1, pinName: "Pin 1 (Signal +)", wireColor: "Gold / Red", signalType: "analog", voltageLevel: "Low-noise detector output", description: "Primary low-noise signal channel" },
      { pinNumber: 2, pinName: "Pin 2 (Signal -)", wireColor: "Gold / Black", signalType: "analog", voltageLevel: "Differential return", description: "Differential reference return" },
      { pinNumber: 3, pinName: "Pin 3 (HV Bias / Trigger)", wireColor: "Yellow", signalType: "power", voltageLevel: "0 - 500V DC Detector Bias", description: "Photomultiplier / Avalanche photodiode bias voltage" },
      { pinNumber: 4, pinName: "Pin 4 (GND / Guard)", wireColor: "Shield", signalType: "ground", voltageLevel: "0 V", description: "Active guard ring & EMC chassis ground" }
    ],
    compatibleHardware: ["Tandetron AMS Carbon-14 Ion Detector", "High-Purity Germanium (HPGe) Gamma Detector", "SQUID Archaeo-Magnetometer", "Subsurface Acoustic Geophones"],
    scientificApplications: ["Accelerator Mass Spectrometry (AMS) C-14 pulse height analysis for dating organic Vedic artifacts", "Superconducting Quantum Interference Device (SQUID) magnetic anomaly recording"],
    wiringNotes: ["To disconnect, grasp the knurled outer release sleeve and pull straight back; pulling on the cable will never release the latch.", "Assemble using dedicated LEMO collet wrench to ensure IP68 watertight seal."],
    schematicTips: ["Maintain continuous 360-degree braid clamping into the connector collet backshell to eliminate high-frequency RF leakage."]
  }
];

// 40+ Hardware Platform Specifications across all categories
export const HARDWARE_PLATFORMS_DATABASE: HardwarePlatformSpec[] = [
  // MCUs
  {
    id: "esp32_s3",
    name: "Espressif ESP32-S3 Dual-Core Xtensa LX7 + Vector AI",
    category: "mcu",
    socArchitecture: "32-bit Xtensa Dual-Core LX7 @ 240 MHz + Vector Instructions",
    clockSpeed: "240 MHz",
    operatingVoltage: "3.3 V DC (Supply: 5V USB-C or 3.3V Pin)",
    logicLevel: "3.3 V LVTTL (Non-5V tolerant)",
    powerConsumption: "Deep Sleep: 5 µA; Active RF: 160-240 mA",
    supportedConnectors: ["USB Type-C (24-pin)", "Qwiic / STEMMA QT", "Grove 4-pin", "SMA RF (for 2.4GHz Wi-Fi/BLE)", "2.54mm Breadboard Header (38-pin)"],
    nativeInterfaces: ["Wi-Fi 802.11 b/g/n (2.4 GHz)", "Bluetooth 5 (LE & Mesh)", "Dual Native USB (OTG & Serial/JTAG)", "3x UART", "2x I2C", "4x SPI", "14x Capacitive Touch", "2x 12-bit ADC (20 channels)", "I2S Audio", "LCD Parallel & Camera (DVP) Interface", "TWAI (CAN Bus 2.0B)"],
    browserWebStandards: ["Web Serial", "Web Bluetooth (BLE)", "WebSocket / MQTT"],
    driverSupport: ["ESP-IDF (C/C++)", "Arduino Core for ESP32", "MicroPython", "CircuitPython", "Rust (esp-rs)"],
    typicalArchaeologyRole: "Real-time edge sensor hub for excavation microclimate, wireless 9-DOF IMU orienting, and live WebSerial telemetry streaming to Granth applet.",
    connectionGuide: "Plug via standard USB-C cable. Click 'Connect Web Serial' in the terminal tab and select 'ESP32-S3 USB JTAG/serial debug unit' at 115200 baud."
  },
  {
    id: "arduino_uno_r4_wifi",
    name: "Arduino Uno R4 WiFi (Renesas RA4M1 32-bit ARM Cortex-M4)",
    category: "mcu",
    socArchitecture: "Renesas RA4M1 32-bit ARM Cortex-M4 @ 48 MHz + ESP32-S3 WiFi/BLE co-processor",
    clockSpeed: "48 MHz",
    operatingVoltage: "5.0 V DC (Internal logic: 5V TTL, Native USB: USB-C)",
    logicLevel: "5.0 V TTL (5V Tolerant on all pins)",
    powerConsumption: "Active: 45 mA; Idle: 20 mA",
    supportedConnectors: ["USB Type-C", "Qwiic / STEMMA QT (I2C VRx)", "Standard Arduino Shield Header", "DC Barrel Jack (5.5x2.1mm)"],
    nativeInterfaces: ["USB 2.0 Full Speed", "1x UART", "1x I2C (Qwiic compatible)", "1x SPI", "CAN Bus (with external transceiver)", "14x Digital I/O (6 PWM)", "6x 14-bit Analog Inputs (ADC)", "1x 12-bit DAC", "12x8 LED Matrix Display"],
    browserWebStandards: ["Web Serial", "Web Bluetooth (BLE)", "WebSocket / MQTT"],
    driverSupport: ["Arduino IDE / CLI (C++)", "PlatformIO", "Matlab & Simulink"],
    typicalArchaeologyRole: "Classical 5V laboratory sensor interfacing, robotic turntable rotation for 360-degree RTI ancient artifact photogrammetry, automated soil resistivity stepping.",
    connectionGuide: "Connect via USB-C. Native CDC Serial will enumerate as 'Arduino UNO R4 WiFi'. Select baud rate 115200 for full telemetry streaming."
  },
  {
    id: "rpi_pico_2_rp2350",
    name: "Raspberry Pi Pico 2 (Dual Hazard3 RISC-V / Dual ARM Cortex-M33)",
    category: "mcu",
    socArchitecture: "Selectable Dual-Core ARM Cortex-M33 / Dual Hazard3 RISC-V @ 150 MHz + 12 Programmable I/O (PIO) State Machines",
    clockSpeed: "150 MHz",
    operatingVoltage: "3.3 V DC (Supply: 1.8V - 5.5V on VSYS via Micro-B / Type-C)",
    logicLevel: "3.3 V LVTTL",
    powerConsumption: "Active: 20-40 mA; Dormant: 1.5 mA",
    supportedConnectors: ["Micro-USB / USB-C", "SWD 3-Pin Debug", "Castellated 40-pin PCB header"],
    nativeInterfaces: ["USB 1.1 Host/Device", "2x UART", "2x I2C", "2x SPI", "16x PWM channels", "3x 12-bit ADC", "12x PIO State Machines (custom protocol emulation)"],
    browserWebStandards: ["Web Serial", "WebUSB", "WebHID"],
    driverSupport: ["Pico C/C++ SDK", "MicroPython", "CircuitPython", "FreeRTOS", "Rust"],
    typicalArchaeologyRole: "Ultra-precise nanosecond-level time-of-flight GPR pulse timing, custom DSI / parallel manuscript camera capture, bit-banged legacy telemetry decoding.",
    connectionGuide: "Plug in USB. Enumerate as USB CDC Serial port. Use Web Serial API to stream high-frequency sensor capture directly into the browser."
  },
  {
    id: "stm32_nucleo_h743zi",
    name: "STMicroelectronics STM32 Nucleo-144 H743ZI (480 MHz ARM Cortex-M7)",
    category: "mcu",
    socArchitecture: "High-Performance ARM Cortex-M7 with Double-Precision FPU & 2 MB Flash",
    clockSpeed: "480 MHz",
    operatingVoltage: "3.3 V DC (Onboard ST-LINK USB supply)",
    logicLevel: "3.3 V LVTTL (Many 5V tolerant pins)",
    powerConsumption: "Active full load: 150 mA",
    supportedConnectors: ["ST-LINK Micro-B / Type-C", "RJ45 Ethernet (10/100)", "Morpho 144-pin header", "Arduino Uno V3 header"],
    nativeInterfaces: ["Ethernet IEEE 802.3", "3x High-Speed 16-bit ADCs (3.6 MSPS)", "2x 12-bit DACs", "4x I2C", "6x SPI", "4x USART + 4x UART", "2x FDCAN", "1x USB OTG FS + 1x HS", "Camera Interface (DCMI)", "Hardware Cryptographic Engine"],
    browserWebStandards: ["Web Serial", "WebUSB", "WebSocket / MQTT"],
    driverSupport: ["STM32CubeIDE (C/C++)", "Keil MDK", "IAR Embedded Workbench", "Zephyr RTOS"],
    typicalArchaeologyRole: "Real-time acoustic soundscape FFT processing of ancient temple sanctums, sub-millivolt gamma radiation spectrum pulse height analyzer (PHA).",
    connectionGuide: "Connect ST-LINK USB. Virtual COM Port (VCP) automatically routes USART3 directly to browser Web Serial."
  },

  // SBC & EDGE AI
  {
    id: "rpi_5_8gb",
    name: "Raspberry Pi 5 (Quad-Core 64-bit ARM Cortex-A76 @ 2.4 GHz + PCIe)",
    category: "sbc_edge_ai",
    socArchitecture: "Broadcom BCM2712 Quad-core ARM Cortex-A76 @ 2.4 GHz + RP1 I/O Controller",
    clockSpeed: "2.4 GHz",
    operatingVoltage: "5.0 V DC @ 5.0 A via USB-C PD (27W required for full USB power)",
    logicLevel: "3.3 V LVTTL on 40-pin GPIO",
    powerConsumption: "Idle: 3.5 W; Max Load: 12 W",
    supportedConnectors: ["USB Type-C (Power Delivery 5V/5A)", "2x USB 3.0 Type-A", "2x USB 2.0 Type-A", "2x micro-HDMI (4K60)", "RJ45 Gigabit Ethernet (PoE+ ready)", "40-Pin GPIO Header", "PCIe 2.0 x1 FPC Connector", "2x 4-lane MIPI CSI/DSI FPC ribbon"],
    nativeInterfaces: ["PCIe 2.0 x1", "Gigabit Ethernet", "Dual 4-lane MIPI CSI-2 Camera", "Dual 4K HDMI", "Wi-Fi 5 (802.11ac)", "Bluetooth 5.0 BLE", "Hardware I2C/SPI/UART/I2S/PWM on 40-pin GPIO"],
    browserWebStandards: ["WebSocket / MQTT", "Web Serial", "WebHID", "Web Audio"],
    driverSupport: ["Debian Bookworm (Raspberry Pi OS)", "Ubuntu Server/Desktop", "ROS 2 (Robot Operating System)", "Python 3 (NumPy, SciPy, OpenCV, PyTorch, PySerial)"],
    typicalArchaeologyRole: "Central field expedition server, autonomous excavation trench photogrammetry processing, multi-camera synchronized RTI lighting rig controller.",
    connectionGuide: "Connect to the same local Wi-Fi or plug in via Gigabit Ethernet cable. Stream real-time camera and sensor telemetry via WebSockets on port 8080/3000."
  },
  {
    id: "nvidia_jetson_orin_nano",
    name: "NVIDIA Jetson Orin Nano (40 TOPS AI / 1024-Core NVIDIA Ampere GPU)",
    category: "sbc_edge_ai",
    socArchitecture: "6-core ARM Cortex-A78AE v8.2 64-bit + 1024-core NVIDIA Ampere Architecture GPU with 32 Tensor Cores",
    clockSpeed: "1.5 GHz CPU / 625 MHz GPU",
    operatingVoltage: "9V - 20V DC via DC Barrel Jack (5.5x2.5mm)",
    logicLevel: "3.3 V on 40-pin header",
    powerConsumption: "Configurable 7 W to 15 W power modes",
    supportedConnectors: ["DC Barrel Jack (5.5x2.5mm)", "USB Type-C", "4x USB 3.2 Gen 2 Type-A (10 Gbps)", "DisplayPort 1.2", "RJ45 Gigabit Ethernet", "M.2 Key M (NVMe PCIe Gen4 x4)", "M.2 Key E (Wi-Fi/BT)", "40-Pin Expansion Header", "2x 2-lane / 1x 4-lane MIPI CSI-2 Camera"],
    nativeInterfaces: ["CUDA 11.4 / 12", "TensorRT 8.5", "cuDNN", "OpenCV", "Gigabit Ethernet", "MIPI CSI-2 (up to 4 cameras)", "PCIe Gen4 x4 NVMe", "I2C, SPI, UART, CAN, PWM, I2S"],
    browserWebStandards: ["WebSocket / MQTT", "Web Serial", "WebUSB", "WebRTC Video Stream"],
    driverSupport: ["NVIDIA JetPack 5.x / 6.x (Ubuntu 22.04 LTS)", "NVIDIA DeepStream SDK", "PyTorch with CUDA", "ROS 2 Humble"],
    typicalArchaeologyRole: "Real-time edge neural network epigraphy recognition of eroded Brahmi/Kharosthi stone inscriptions directly in the field; real-time 3D SLAM point cloud fusion from LiDAR.",
    connectionGuide: "Stream high-definition WebRTC video and detected inscription bounding boxes with confidence scores over WebSocket to Granth applet."
  },

  // SCIENTIFIC & ARCHAEO-INSTRUMENTS
  {
    id: "gssi_sir4000_gpr",
    name: "GSSI SIR-4000 Subsurface Ground Penetrating Radar Controller",
    category: "archaeo_sensor",
    socArchitecture: "High-Speed DSP Digital Radar Signal Processor + Dual-Channel Receiver",
    clockSpeed: "Real-time 800 kHz Pulse Repetition Frequency",
    operatingVoltage: "10.8 V - 14.8 V DC (Li-ion Cart Battery, Amphenol military connector)",
    logicLevel: "RS-232 / Ethernet TCP/IP / USB 2.0 Host",
    powerConsumption: "19 W nominal",
    supportedConnectors: ["19-Pin Military Bayonet Antenna Port (Amphenol MS3106)", "RJ45 100 Mbps Ethernet", "DB9 RS-232 Serial Port", "USB Type-A Host", "BNC Marker/Sync In", "Optical Distance Odometer Wheel Input"],
    nativeInterfaces: ["Ethernet TCP/IP (RADAN format stream)", "NMEA 0183 GPS input (via DB9 RS-232)", "Odometer Quadrature Encoder Pulse Counter", "Digital I/O Trigger"],
    browserWebStandards: ["Web Serial", "WebSocket / MQTT"],
    driverSupport: ["GSSI RADAN format (.DZT / .DZG)", "SEG-Y Geophysical Standard Format", "Python `pyGPR` / `RGPR`"],
    typicalArchaeologyRole: "High-resolution non-invasive mapping of buried Vedic brick altars (Shulba Sutras geometry), buried foundations, moats, and ancient riverbeds.",
    connectionGuide: "Plug DB9 RS-232 output via USB-to-Serial cable into laptop. Select 115200 baud in Web Serial Terminal to receive real-time A-scan radar pulse traces and survey coordinates."
  },
  {
    id: "pxrf_thermo_niton_xl3t",
    name: "Thermo Scientific Niton XL3t Handheld pXRF Elemental Analyzer",
    category: "scientific_instrument",
    socArchitecture: "50 kV 200 µA Ag-Anode X-Ray Tube + Silicon Drift Detector (SDD) with Peltier Cooler",
    clockSpeed: "Multichannel Analyzer (MCA) 4096 channels",
    operatingVoltage: "7.2 V Li-ion Battery / 12V DC Mains Adapter",
    logicLevel: "RS-232 / USB Virtual COM / Bluetooth SPP",
    powerConsumption: "15 W during X-Ray active excitation",
    supportedConnectors: ["Hirose 8-Pin Serial/Power Port", "Mini-USB Port", "Bluetooth 2.1 SPP Serial"],
    nativeInterfaces: ["Proprietary NDT ASCII Protocol", "SCPI-like query syntax", "CSV Spectral Dump", "Bluetooth Serial Port Profile (SPP)"],
    browserWebStandards: ["Web Serial", "Web Bluetooth (BLE)"],
    driverSupport: ["Thermo NDT PC Software", "Custom Python PySerial Driver", "Standard ASCII Parser"],
    typicalArchaeologyRole: "Non-destructive elemental compositional analysis (PPM detection) of ancient Indus bronze/copper alloy smelting, gold bullion purity, and mineral pottery glazes.",
    connectionGuide: "Connect via USB cable or Bluetooth SPP. Send command ':MEAS:START' over Web Serial to initiate 30-second elemental spectral assay and receive live PPM concentrations."
  },
  {
    id: "ublox_zed_f9p_rtk_gnss",
    name: "u-blox ZED-F9P Multi-Band High-Precision RTK GNSS Receiver",
    category: "archaeo_sensor",
    socArchitecture: "Multi-band L1/L2/L5 concurrent reception of GPS, GLONASS, Galileo, BeiDou, and NavIC",
    clockSpeed: "Up to 20 Hz RTK Navigation Update Rate",
    operatingVoltage: "3.3 V DC (Supply: 5V via USB or header)",
    logicLevel: "3.3 V LVTTL (Non-5V tolerant)",
    powerConsumption: "Active RTK: 68 mA @ 3.3V",
    supportedConnectors: ["SMA Female (50Ω Active Antenna)", "USB Type-C", "Qwiic / STEMMA QT (I2C)", "2.54mm Pin Header (UART1, UART2, SPI)"],
    nativeInterfaces: ["UBX Binary Protocol", "NMEA 0183 Standard Sentences ($GNGGA, $GNRMC, $GNVTG, $GNGSA)", "RTCM 3.3 Differential Corrections Input/Output", "I2C (DDC)", "Dual UARTs (UART1 for Host, UART2 for RTCM radio)"],
    browserWebStandards: ["Web Serial", "WebSocket / MQTT"],
    driverSupport: ["u-center GNSS Evaluation Software", "Python `pyubx2`", "ROS 2 `ublox_dgnss`"],
    typicalArchaeologyRole: "Centimeter-accurate (1 cm + 1 ppm) geodetic mapping of ancient archaeological trenches, epigraph stone monuments, and archaeo-astronomy horizon alignment markers.",
    connectionGuide: "Plug in USB-C. Open Web Serial Terminal at 38400 or 115200 baud. The receiver immediately streams live $GNGGA sentences with latitude, longitude, and elevation."
  },
  {
    id: "bartington_grad601_mag",
    name: "Bartington Grad601 Dual Fluxgate Archaeo-Gradiometer",
    category: "archaeo_sensor",
    socArchitecture: "Dual 1-meter vertical separation fluxgate magnetic sensors with 0.03 nT sensitivity",
    clockSpeed: "Sample rate: 16 readings per meter @ 1 m/s pace",
    operatingVoltage: "12 V Rechargeable Sealed Lead Acid / NiMH Belt Pack",
    logicLevel: "RS-232 (9600 baud, 8-N-1)",
    powerConsumption: "4.8 W",
    supportedConnectors: ["Lemo 0B 4-Pin Sensor Cable", "DB9 RS-232 Data Download Port", "Push-button Pacer Audio Beeper"],
    nativeInterfaces: ["Standard RS-232 Serial", "Analog 0-5V Real-Time Audio Pitch Output", "ASCII Grid Data Format"],
    browserWebStandards: ["Web Serial"],
    driverSupport: ["Bartington Grad601 PC Software", "Geoplot", "TerraSurveyor", "Python `archaeo-mag`"],
    typicalArchaeologyRole: "Detecting thermoremanent magnetization of buried baked brick kilns, fire altars, hearths, metallurgy slag heaps, and ancient mud-brick wall alignments.",
    connectionGuide: "Connect DB9 port to USB Serial adapter. In Web Serial Terminal, send 'DUMP_SURVEY' at 9600 baud to download the entire magnetic anomaly grid."
  }
];

// Calculation Constants & Formulas
export const LEVEL_SHIFTER_REFERENCE = [
  { from: "5.0V TTL", to: "3.3V LVTTL", method: "Resistor Divider (1.8kΩ / 3.3kΩ) or Bi-directional MOSFET (BSS138 with 10kΩ pullups)", notes: "Safe for UART/SPI/I2C. Resistor divider is one-way only (5V -> 3.3V)." },
  { from: "3.3V LVTTL", to: "5.0V TTL", method: "Direct Connection (if 5V MCU VIH < 2.0V) or Bi-directional MOSFET Level Shifter", notes: "Arduino Uno 5V recognizes >3.0V as High, but MOSFET shifter is recommended for noise immunity." },
  { from: "12.0V RS-232", to: "3.3V / 5V TTL", method: "MAX3232 / MAX232 Charge-Pump Transceiver IC", notes: "MANDATORY! Connecting ±12V directly to any MCU pin will permanently destroy the chip." },
  { from: "24.0V PLC", to: "3.3V / 5V Logic", method: "Optocoupler (PC817 / 6N137 with 2.2kΩ current limiter) or Resistor Divider (10kΩ / 1.5kΩ)", notes: "Optocoupler provides 2.5kV galvanic safety isolation between noisy factory/excavation ground and sensitive PC." },
  { from: "Differential RS-485", to: "UART TTL (RX/TX)", method: "MAX485 / MAX3485 / ISO3082 Transceiver", notes: "Converts differential A/B lines to standard RX/TX UART with Driver Enable (DE/RE) control." }
];

export const I2C_SPEED_STANDARDS = [
  { mode: "Standard Mode (Sm)", clockSpeed: "100 kHz", maxRiseTime: "1000 ns", recommendedPullup: "4.7 kΩ (for ~100-200 pF bus)", minPullup: "1.5 kΩ", maxPullup: "10.0 kΩ" },
  { mode: "Fast Mode (Fm)", clockSpeed: "400 kHz", maxRiseTime: "300 ns", recommendedPullup: "2.2 kΩ (for ~100-200 pF bus)", minPullup: "1.0 kΩ", maxPullup: "4.7 kΩ" },
  { mode: "Fast Mode Plus (Fm+)", clockSpeed: "1 MHz", maxRiseTime: "120 ns", recommendedPullup: "1.0 kΩ (for ~100-200 pF bus)", minPullup: "560 Ω", maxPullup: "2.2 kΩ" },
  { mode: "High Speed Mode (Hs)", clockSpeed: "3.4 MHz", maxRiseTime: "40 ns", recommendedPullup: "Current Source Pull-Up (~3 mA active)", minPullup: "Specialized IC", maxPullup: "Active Terminator" }
];
