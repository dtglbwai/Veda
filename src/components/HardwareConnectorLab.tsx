import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Cpu, 
  Radio, 
  Zap, 
  Terminal, 
  Sliders, 
  Activity, 
  Download, 
  Play, 
  Pause, 
  RotateCw, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  Search, 
  Filter, 
  Copy, 
  Check, 
  Code, 
  ShieldCheck, 
  Server, 
  Plug, 
  Tv, 
  Flame, 
  Compass, 
  Waves, 
  Send, 
  Trash2, 
  ExternalLink,
  ChevronRight,
  Info,
  Maximize2
} from "lucide-react";
import { 
  CONNECTOR_SPECS_DATABASE, 
  HARDWARE_PLATFORMS_DATABASE, 
  LEVEL_SHIFTER_REFERENCE, 
  I2C_SPEED_STANDARDS,
  ConnectorSpec,
  HardwarePlatformSpec
} from "../data/hardwareConnectorsData";

export default function HardwareConnectorLab() {
  // Main Navigation Tabs
  const [activeTab, setActiveTab] = useState<"connectors" | "hardware" | "live_terminal" | "calculators" | "firmware_gen">("connectors");

  // --- TAB 1: CONNECTORS STATE ---
  const [selectedConnectorCategory, setSelectedConnectorCategory] = useState<string>("all");
  const [connectorSearch, setConnectorSearch] = useState<string>("");
  const [selectedConnectorId, setSelectedConnectorId] = useState<string>(CONNECTOR_SPECS_DATABASE[0].id);
  const [activePinHighlight, setActivePinHighlight] = useState<number | string | null>(null);

  // --- TAB 2: HARDWARE STATE ---
  const [selectedHardwareCategory, setSelectedHardwareCategory] = useState<string>("all");
  const [hardwareSearch, setHardwareSearch] = useState<string>("");
  const [selectedHardwareId, setSelectedHardwareId] = useState<string>(HARDWARE_PLATFORMS_DATABASE[0].id);

  // --- TAB 3: LIVE TERMINAL STATE ---
  const [baudRate, setBaudRate] = useState<number>(115200);
  const [dataBits, setDataBits] = useState<number>(8);
  const [stopBits, setStopBits] = useState<number>(1);
  const [parity, setParity] = useState<"none" | "even" | "odd">("none");
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isSimulated, setIsSimulated] = useState<boolean>(true);
  const [simDataSource, setSimDataSource] = useState<"gps_nmea" | "gpr_radar" | "pxrf_spec" | "imu_9dof" | "modbus_env">("gps_nmea");
  const [terminalViewMode, setTerminalViewMode] = useState<"ascii" | "hex" | "split">("split");
  const [commandInput, setCommandInput] = useState<string>("");
  const [logEntries, setLogEntries] = useState<{ id: string; timestamp: string; type: "rx" | "tx" | "sys"; text: string; hex: string }[]>([]);
  const [dtrState, setDtrState] = useState<boolean>(true);
  const [rtsState, setRtsState] = useState<boolean>(true);
  const [rxByteCount, setRxByteCount] = useState<number>(0);
  const [txByteCount, setTxByteCount] = useState<number>(0);
  const [isAutoScroll, setIsAutoScroll] = useState<boolean>(true);
  const [webSerialSupported, setWebSerialSupported] = useState<boolean>(false);

  // --- TAB 4: CALCULATORS STATE ---
  // Level Shifter Calc
  const [calcInputVoltage, setCalcInputVoltage] = useState<number>(5.0);
  const [calcTargetVoltage, setCalcTargetVoltage] = useState<number>(3.3);
  const [calcR1, setCalcR1] = useState<number>(1800); // 1.8k
  const [calcR2, setCalcR2] = useState<number>(3300); // 3.3k
  
  // I2C Calc
  const [calcI2cBusCapacitance, setCalcI2cBusCapacitance] = useState<number>(150); // pF
  const [calcI2cSpeedMode, setCalcI2cSpeedMode] = useState<string>("400 kHz (Fast Mode)");

  // Checksum / CRC Calc
  const [checksumInputText, setChecksumInputText] = useState<string>("GPGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,46.9,M,,");
  const [generatedNmeaChecksum, setGeneratedNmeaChecksum] = useState<string>("");
  const [modbusInputHex, setModbusInputHex] = useState<string>("01 03 00 00 00 0A");
  const [generatedModbusCrc, setGeneratedModbusCrc] = useState<string>("");

  // --- TAB 5: FIRMWARE GENERATOR STATE ---
  const [firmwarePlatform, setFirmwarePlatform] = useState<"arduino" | "esp32" | "rpi_python" | "nodejs">("arduino");
  const [firmwareProtocol, setFirmwareProtocol] = useState<"uart_serial" | "i2c_qwiic" | "spi_bus" | "modbus_rtu">("uart_serial");
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  // Check for Web Serial support
  useEffect(() => {
    if (typeof navigator !== "undefined" && "serial" in navigator) {
      setWebSerialSupported(true);
    }
  }, []);

  // Auto-scroll terminal
  useEffect(() => {
    if (isAutoScroll && terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logEntries, isAutoScroll]);

  // Real-time Simulation Engine
  useEffect(() => {
    if (!isConnected || !isSimulated) return;

    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = now.toTimeString().split(" ")[0] + "." + String(now.getMilliseconds()).padStart(3, "0");
      let newText = "";
      
      if (simDataSource === "gps_nmea") {
        const lat = (15.335 + (Math.random() * 0.0001 - 0.00005)).toFixed(6);
        const lon = (76.460 + (Math.random() * 0.0001 - 0.00005)).toFixed(6);
        const alt = (465.2 + (Math.random() * 0.4 - 0.2)).toFixed(1);
        const sats = Math.floor(18 + Math.random() * 6);
        const hdop = (0.7 + Math.random() * 0.2).toFixed(2);
        
        // Form NMEA sentence
        const rawBody = `GNGGA,${now.toTimeString().split(" ")[0].replace(/:/g,"")},${lat},N,${lon},E,4,${sats},${hdop},${alt},M,-42.1,M,1.2,0000`;
        let cs = 0;
        for (let i = 0; i < rawBody.length; i++) cs ^= rawBody.charCodeAt(i);
        newText = `$${rawBody}*${cs.toString(16).toUpperCase().padStart(2, "0")}\r\n`;
      } else if (simDataSource === "gpr_radar") {
        const traceNum = Math.floor(Math.random() * 1000) + 1000;
        const depthMeters = (Math.random() * 5.5).toFixed(2);
        const dielectric = (6.4 + Math.random() * 0.4).toFixed(1);
        const amp = (Math.sin(Date.now() / 200) * 128 + 128).toFixed(0);
        newText = `[GPR_TRACE:#${traceNum}|TIME_NS:42.8|DEPTH_M:${depthMeters}|ER:${dielectric}|AMP_RAW:${amp}|ENC_PULSES:4820]\r\n`;
      } else if (simDataSource === "pxrf_spec") {
        const cuPpm = (45200 + Math.random() * 400 - 200).toFixed(0);
        const snPpm = (12400 + Math.random() * 200 - 100).toFixed(0);
        const pbPpm = (3200 + Math.random() * 100 - 50).toFixed(0);
        const fePpm = (1800 + Math.random() * 80 - 40).toFixed(0);
        const auPpm = (142 + Math.random() * 15 - 7).toFixed(1);
        newText = `[pXRF_LIVE|40kV_200uA|DEADTIME:14.2%|Cu:${cuPpm}ppm|Sn:${snPpm}ppm|Pb:${pbPpm}ppm|Fe:${fePpm}ppm|Au:${auPpm}ppm]\r\n`;
      } else if (simDataSource === "imu_9dof") {
        const pitch = (Math.sin(Date.now() / 800) * 14.5).toFixed(2);
        const roll = (Math.cos(Date.now() / 900) * 8.2).toFixed(2);
        const yaw = ((Date.now() / 150) % 360).toFixed(1);
        const magUT = (44.8 + Math.random() * 0.6).toFixed(2);
        newText = `[9DOF|PITCH:${pitch}°|ROLL:${roll}°|YAW:${yaw}°|MAG_FIELD:${magUT}uT|TEMP:28.4°C]\r\n`;
      } else if (simDataSource === "modbus_env") {
        const soilMoist = (34.2 + Math.random() * 1.5).toFixed(1);
        const soilPh = (7.15 + (Math.random() * 0.08 - 0.04)).toFixed(2);
        const soilEc = (1.42 + Math.random() * 0.05).toFixed(2);
        const radonBqm3 = Math.floor(18 + Math.random() * 6);
        newText = `[MODBUS_RTU:01|FUNC:03|MOIST:${soilMoist}%|pH:${soilPh}|EC:${soilEc}mS/cm|RADON:${radonBqm3}Bq/m3|STATUS:OK]\r\n`;
      }

      // Convert text to hex string
      let hexStr = "";
      for (let i = 0; i < newText.length; i++) {
        hexStr += newText.charCodeAt(i).toString(16).toUpperCase().padStart(2, "0") + " ";
      }

      setLogEntries(prev => {
        const updated = [...prev, {
          id: Math.random().toString(36).substring(2, 9),
          timestamp: timeStr,
          type: "rx",
          text: newText.trim(),
          hex: hexStr.trim()
        }];
        if (updated.length > 200) return updated.slice(updated.length - 200);
        return updated;
      });

      setRxByteCount(prev => prev + newText.length);
    }, 450);

    return () => clearInterval(interval);
  }, [isConnected, isSimulated, simDataSource]);

  // Connect / Disconnect Handler
  const handleToggleConnect = () => {
    if (isConnected) {
      setIsConnected(false);
      setLogEntries(prev => [...prev, {
        id: Math.random().toString(36).substring(2, 9),
        timestamp: new Date().toTimeString().split(" ")[0],
        type: "sys",
        text: `[SYSTEM] Port Disconnected. Session closed.`,
        hex: ""
      }]);
    } else {
      setIsConnected(true);
      setLogEntries(prev => [...prev, {
        id: Math.random().toString(36).substring(2, 9),
        timestamp: new Date().toTimeString().split(" ")[0],
        type: "sys",
        text: `[SYSTEM] Connected to ${isSimulated ? "Simulated Virtual Serial Port" : "Physical Web Serial Device"} @ ${baudRate} baud, ${dataBits}-${parity.toUpperCase()[0]}-${stopBits}.`,
        hex: ""
      }]);
    }
  };

  // Send Command Handler
  const handleSendCommand = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!commandInput.trim()) return;

    const timeStr = new Date().toTimeString().split(" ")[0] + "." + String(new Date().getMilliseconds()).padStart(3, "0");
    const cmd = commandInput.trim();
    let hexStr = "";
    for (let i = 0; i < cmd.length; i++) {
      hexStr += cmd.charCodeAt(i).toString(16).toUpperCase().padStart(2, "0") + " ";
    }

    setLogEntries(prev => [...prev, {
      id: Math.random().toString(36).substring(2, 9),
      timestamp: timeStr,
      type: "tx",
      text: `> ${cmd}`,
      hex: hexStr.trim()
    }]);

    setTxByteCount(prev => prev + cmd.length);
    setCommandInput("");

    // Simulate response if in simulation mode
    if (isSimulated && isConnected) {
      setTimeout(() => {
        let resp = "";
        if (cmd === "*IDN?" || cmd.toLowerCase() === "idn") {
          resp = "[INSTRUMENT_ID: IKS-ARCHAEO-LAB-v4.2, ESP32-S3-RADAR-DAQ, SN:2026-INDUS-994, FW:3.8.1]";
        } else if (cmd.startsWith("CALIB")) {
          resp = "[CALIBRATION_STATUS: ZERO_CAL_COMPLETE, NOISE_FLOOR:-84dBm, STATUS:LOCKED]";
        } else {
          resp = `[ACK: CMD='${cmd}' PROCESSED_SUCCESSFULLY]`;
        }
        let rHex = "";
        for (let i = 0; i < resp.length; i++) rHex += resp.charCodeAt(i).toString(16).toUpperCase().padStart(2, "0") + " ";
        
        setLogEntries(prev => [...prev, {
          id: Math.random().toString(36).substring(2, 9),
          timestamp: new Date().toTimeString().split(" ")[0],
          type: "rx",
          text: resp,
          hex: rHex.trim()
        }]);
        setRxByteCount(prev => prev + resp.length);
      }, 150);
    }
  };

  // Calculate NMEA Checksum
  useEffect(() => {
    if (!checksumInputText) {
      setGeneratedNmeaChecksum("");
      return;
    }
    let clean = checksumInputText.replace(/^\$/, "").replace(/\*.*$/, "");
    let cs = 0;
    for (let i = 0; i < clean.length; i++) {
      cs ^= clean.charCodeAt(i);
    }
    setGeneratedNmeaChecksum(`$${clean}*${cs.toString(16).toUpperCase().padStart(2, "0")}`);
  }, [checksumInputText]);

  // Calculate Modbus RTU CRC-16
  useEffect(() => {
    if (!modbusInputHex) {
      setGeneratedModbusCrc("");
      return;
    }
    try {
      const bytes = modbusInputHex.trim().split(/[\s,]+/).map(b => parseInt(b, 16)).filter(b => !isNaN(b));
      if (bytes.length === 0) return;

      let crc = 0xFFFF;
      for (let pos = 0; pos < bytes.length; pos++) {
        crc ^= bytes[pos];
        for (let i = 8; i !== 0; i--) {
          if ((crc & 0x0001) !== 0) {
            crc >>= 1;
            crc ^= 0xA001;
          } else {
            crc >>= 1;
          }
        }
      }
      const crcLow = crc & 0xFF;
      const crcHigh = (crc >> 8) & 0xFF;
      const lowHex = crcLow.toString(16).toUpperCase().padStart(2, "0");
      const highHex = crcHigh.toString(16).toUpperCase().padStart(2, "0");
      setGeneratedModbusCrc(`${modbusInputHex.trim()} ${lowHex} ${highHex} (CRC: 0x${crc.toString(16).toUpperCase().padStart(4, "0")})`);
    } catch {
      setGeneratedModbusCrc("Invalid Hex Input");
    }
  }, [modbusInputHex]);

  // Filtered Connectors & Hardware
  const filteredConnectors = CONNECTOR_SPECS_DATABASE.filter(c => {
    const matchCat = selectedConnectorCategory === "all" || c.category === selectedConnectorCategory;
    const matchSearch = c.name.toLowerCase().includes(connectorSearch.toLowerCase()) || 
                        c.shortDescription.toLowerCase().includes(connectorSearch.toLowerCase()) ||
                        c.standards.some(s => s.toLowerCase().includes(connectorSearch.toLowerCase()));
    return matchCat && matchSearch;
  });

  const activeConnector = CONNECTOR_SPECS_DATABASE.find(c => c.id === selectedConnectorId) || CONNECTOR_SPECS_DATABASE[0];

  const filteredHardware = HARDWARE_PLATFORMS_DATABASE.filter(h => {
    const matchCat = selectedHardwareCategory === "all" || h.category === selectedHardwareCategory;
    const matchSearch = h.name.toLowerCase().includes(hardwareSearch.toLowerCase()) || 
                        h.socArchitecture.toLowerCase().includes(hardwareSearch.toLowerCase()) ||
                        h.typicalArchaeologyRole.toLowerCase().includes(hardwareSearch.toLowerCase());
    return matchCat && matchSearch;
  });

  const activeHardware = HARDWARE_PLATFORMS_DATABASE.find(h => h.id === selectedHardwareId) || HARDWARE_PLATFORMS_DATABASE[0];

  // Calculated Resistor Output
  const calculatedVout = (calcInputVoltage * calcR2) / (calcR1 + calcR2);

  // Generate Firmware Code
  const getGeneratedFirmwareCode = () => {
    if (firmwarePlatform === "arduino") {
      return `/*
 * Granth Archaeo-Science & Indic Heritage Laboratory
 * Hardware Sensor Streamer for Arduino (Uno R3/R4, Mega, Nano)
 * Protocol: ${firmwareProtocol.toUpperCase()} | Baud: 115200 8-N-1
 */

#include <Arduino.h>
${firmwareProtocol === "i2c_qwiic" ? "#include <Wire.h>\n#define SENSOR_I2C_ADDR 0x68" : ""}
${firmwareProtocol === "spi_bus" ? "#include <SPI.h>\nconst int CS_PIN = 10;" : ""}

unsigned long lastTelemetryMillis = 0;
const unsigned long TELEMETRY_INTERVAL_MS = 250; // 4 Hz refresh rate

void setup() {
  // Initialize High-Speed Hardware Serial for Web Serial API
  Serial.begin(115200);
  while (!Serial && millis() < 3000); // Wait for USB CDC connection

  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, HIGH);

  ${firmwareProtocol === "i2c_qwiic" ? "Wire.begin(); // Standard 100kHz / 400kHz I2C Bus\n  Wire.setClock(400000);" : ""}
  ${firmwareProtocol === "spi_bus" ? "pinMode(CS_PIN, OUTPUT);\n  digitalWrite(CS_PIN, HIGH);\n  SPI.begin();" : ""}

  Serial.println(F("[SYSTEM_BOOT: ARDUINO_ARCHAEO_DAQ_READY]"));
}

void loop() {
  // 1. Process Inbound Commands from Web Serial Terminal
  if (Serial.available() > 0) {
    String cmd = Serial.readStringUntil('\\n');
    cmd.trim();
    if (cmd.length() > 0) {
      if (cmd == "*IDN?") {
        Serial.println(F("[IDN: ARDUINO_IKS_DAQ_v2.4, RENESAS_RA4M1, SN:8839201]"));
      } else if (cmd == "PING") {
        Serial.println(F("[PONG: STATUS_OK]"));
      } else {
        Serial.print(F("[ACK: COMMAND_RECEIVED: "));
        Serial.print(cmd);
        Serial.println(F("]"));
      }
    }
  }

  // 2. Stream Periodic Sensor Telemetry
  if (millis() - lastTelemetryMillis >= TELEMETRY_INTERVAL_MS) {
    lastTelemetryMillis = millis();

    // Read analog/digital sensors
    int rawSensorA0 = analogRead(A0);
    float voltageA0 = (rawSensorA0 * 5.0) / 1023.0;

    // Send formatted telemetry packet
    Serial.print(F("[TELEM|TIME_MS:"));
    Serial.print(millis());
    Serial.print(F("|RAW_A0:"));
    Serial.print(rawSensorA0);
    Serial.print(F("|VOLT:"));
    Serial.print(voltageA0, 3);
    Serial.println(F("V|STATUS:SYNC_OK]"));
  }
}`;
    } else if (firmwarePlatform === "esp32") {
      return `/*
 * Granth Archaeo-Science & Indic Heritage Laboratory
 * High-Throughput FreeRTOS Sensor Driver for ESP32-S3 / ESP32-C3
 * Dual WebSerial & Bluetooth LE Telemetry Engine
 */

#include <Arduino.h>
#include <Wire.h>

#define I2C_SDA 8
#define I2C_SCL 9

void telemetryTask(void *pvParameters) {
  TickType_t xLastWakeTime = xTaskGetTickCount();
  const TickType_t xFrequency = pdMS_TO_TICKS(100); // 10 Hz telemetry loop

  for (;;) {
    int adcVal = analogRead(1);
    float vSoil = (adcVal * 3.3) / 4095.0;

    // Output formatted stream to Native USB Serial
    Serial.printf("[ESP32_TELEMETRY|CORE:%d|TICK:%lu|ADC_RAW:%d|VOLTAGE:%.3fV|HEAP:%u]\\n",
                  xPortGetCoreID(), millis(), adcVal, vSoil, esp_get_free_heap_size());

    vTaskDelayUntil(&xLastWakeTime, xFrequency);
  }
}

void setup() {
  Serial.begin(115200);
  Wire.begin(I2C_SDA, I2C_SCL, 400000);

  // Spawn isolated FreeRTOS telemetry thread on Core 1
  xTaskCreatePinnedToCore(
    telemetryTask,
    "TelemetryTask",
    4096,
    NULL,
    1,
    NULL,
    1
  );
}

void loop() {
  if (Serial.available()) {
    String cmd = Serial.readStringUntil('\\n');
    cmd.trim();
    if (cmd == "*IDN?") {
      Serial.println("[IDN: ESP32-S3-ARCHAEO-TELEMETRY-HUB, XTENSA-LX7, ESP-IDF-v5.1]");
    }
  }
  vTaskDelay(pdMS_TO_TICKS(10));
}`;
    } else if (firmwarePlatform === "rpi_python") {
      return `#!/usr/bin/env python3
"""
Granth Archaeo-Science Laboratory
Raspberry Pi 4/5 Python Serial & Sensor Telemetry Gateway
"""

import time
import serial
import json

SERIAL_PORT = "/dev/ttyUSB0"  # or /dev/ttyACM0 for native USB CDC
BAUD_RATE = 115200

def main():
    print(f"Connecting to hardware on {SERIAL_PORT} @ {BAUD_RATE} baud...")
    try:
        ser = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=1.0)
        time.sleep(2.0)  # Wait for Arduino/ESP32 DTR reset
        ser.reset_input_buffer()
        print("[CONNECTED] Streaming real-time sensor packets. Press Ctrl+C to exit.")

        # Query instrument ID
        ser.write(b"*IDN?\\n")
        response = ser.readline().decode('utf-8', errors='ignore').strip()
        print(f"Instrument Response: {response}")

        while True:
            if ser.in_waiting > 0:
                line = ser.readline().decode('utf-8', errors='ignore').strip()
                if line:
                    timestamp = time.strftime("%Y-%m-%d %H:%M:%S")
                    print(f"[{timestamp}] RX: {line}")
            time.sleep(0.01)

    except serial.SerialException as e:
        print(f"Serial Error: {e}")
    except KeyboardInterrupt:
        print("\\nTerminating sensor telemetry bridge.")

if __name__ == "__main__":
    main()`;
    } else {
      return `// Granth Archaeo-Science Laboratory
// Node.js Web Serial & WebSocket Streamer Bridge
// npm install serialport @serialport/parser-readline ws

import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';
import { WebSocketServer } from 'ws';

const PORT_PATH = process.env.PORT_PATH || '/dev/ttyUSB0';
const BAUD_RATE = 115200;
const WS_PORT = 8080;

const port = new SerialPort({ path: PORT_PATH, baudRate: BAUD_RATE });
const parser = port.pipe(new ReadlineParser({ delimiter: '\\r\\n' }));
const wss = new WebSocketServer({ port: WS_PORT });

console.log(\`[NODE_BRIDGE] Listening for hardware on \${PORT_PATH} and broadcasting over WebSocket port \${WS_PORT}...\`);

parser.on('data', (line) => {
  const payload = JSON.stringify({ timestamp: new Date().toISOString(), raw: line });
  wss.clients.forEach((client) => {
    if (client.readyState === 1) client.send(payload);
  });
});

wss.on('connection', (ws) => {
  console.log('[WS_CLIENT_CONNECTED] Browser Applet attached.');
  ws.on('message', (msg) => {
    port.write(msg.toString() + '\\n');
  });
});`;
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-[#0e0c0a] text-[#ede4d0] p-3 sm:p-6 lg:p-8 font-sans">
      {/* HEADER BANNER */}
      <div className="max-w-7xl mx-auto mb-8 border-b border-[#2e241a] pb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-lg bg-gradient-to-br from-amber-600/30 to-amber-900/20 border border-amber-600/50 text-amber-400 shadow-lg">
                <Plug className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#fbf6ea] flex items-center gap-3">
                  Electronic Hardware & Connector Compatibility Standards Hub
                  <span className="text-xs px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono font-normal">
                    IEEE / USB-IF / TIA / IEC
                  </span>
                </h1>
                <p className="text-sm text-stone-400 mt-0.5">
                  Universal interoperability architecture for microcontrollers, edge AI, archaeological field sensors, scientific spectrometers, and 50+ connector standards.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-3 bg-[#17130f] p-3 rounded-lg border border-[#33271b] text-xs font-mono">
            <div className="flex items-center gap-2 text-stone-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Web Serial API:</span>
              <span className={webSerialSupported ? "text-emerald-400 font-semibold" : "text-amber-400 font-semibold"}>
                {webSerialSupported ? "Supported (Native)" : "Simulated Virtual"}
              </span>
            </div>
            <div className="h-4 w-px bg-[#3a2c1f]" />
            <div className="text-stone-300">
              <span>DB Specs:</span>
              <span className="text-amber-400 font-semibold ml-1">50+ Connectors</span>
            </div>
            <div className="h-4 w-px bg-[#3a2c1f]" />
            <div className="text-stone-300">
              <span>MCUs & SBCs:</span>
              <span className="text-amber-400 font-semibold ml-1">40+ Platforms</span>
            </div>
          </div>
        </div>

        {/* PRIMARY NAVIGATION TABS */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-[#251c14]">
          <button
            onClick={() => setActiveTab("connectors")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === "connectors"
                ? "bg-amber-600 text-stone-950 font-semibold shadow-md shadow-amber-900/30"
                : "bg-[#17130f] text-stone-300 hover:bg-[#231b14] border border-[#2d2217]"
            }`}
          >
            <Plug className="w-4 h-4" />
            50+ Connectors & Pinouts Explorer
          </button>

          <button
            onClick={() => setActiveTab("hardware")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === "hardware"
                ? "bg-amber-600 text-stone-950 font-semibold shadow-md shadow-amber-900/30"
                : "bg-[#17130f] text-stone-300 hover:bg-[#231b14] border border-[#2d2217]"
            }`}
          >
            <Cpu className="w-4 h-4" />
            Hardware & MCU Compatibility Matrix
          </button>

          <button
            onClick={() => setActiveTab("live_terminal")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === "live_terminal"
                ? "bg-amber-600 text-stone-950 font-semibold shadow-md shadow-amber-900/30"
                : "bg-[#17130f] text-stone-300 hover:bg-[#231b14] border border-[#2d2217]"
            }`}
          >
            <Terminal className="w-4 h-4" />
            Live Web Serial Terminal & Diagnostic Suite
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700 font-mono">
              LIVE
            </span>
          </button>

          <button
            onClick={() => setActiveTab("calculators")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === "calculators"
                ? "bg-amber-600 text-stone-950 font-semibold shadow-md shadow-amber-900/30"
                : "bg-[#17130f] text-stone-300 hover:bg-[#231b14] border border-[#2d2217]"
            }`}
          >
            <Sliders className="w-4 h-4" />
            Level Shifter, I2C & CRC Calculators
          </button>

          <button
            onClick={() => setActiveTab("firmware_gen")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === "firmware_gen"
                ? "bg-amber-600 text-stone-950 font-semibold shadow-md shadow-amber-900/30"
                : "bg-[#17130f] text-stone-300 hover:bg-[#231b14] border border-[#2d2217]"
            }`}
          >
            <Code className="w-4 h-4" />
            Firmware & Driver Code Generator
          </button>
        </div>
      </div>

      {/* TAB CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto">
        {/* ========================================================================= */}
        {/* TAB 1: 50+ CONNECTORS & PINOUT EXPLORER */}
        {/* ========================================================================= */}
        {activeTab === "connectors" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar: Connector Selector */}
            <div className="lg:col-span-4 bg-[#14100c] p-4 rounded-xl border border-[#2e2318] flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-stone-200 text-sm flex items-center gap-2">
                  <Plug className="w-4 h-4 text-amber-500" />
                  Connector Catalog
                </h3>
                <span className="text-xs text-stone-400 font-mono">
                  {filteredConnectors.length} matching
                </span>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search USB-C, RS-485, BNC, SMA, XLR..."
                  value={connectorSearch}
                  onChange={(e) => setConnectorSearch(e.target.value)}
                  className="w-full bg-[#1b1510] border border-[#3b2d1e] rounded-lg pl-9 pr-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500 placeholder-stone-500"
                />
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: "all", label: "All Categories" },
                  { id: "usb", label: "USB Family" },
                  { id: "serial_fieldbus", label: "Serial & Fieldbus" },
                  { id: "board_mcu", label: "Board Headers" },
                  { id: "rf_coaxial", label: "RF & Coaxial" },
                  { id: "optical", label: "Optical / Fiber" },
                  { id: "audio_acoustic", label: "Audio & Acoustics" },
                  { id: "power_battery", label: "Power & Battery" },
                  { id: "scientific_probes", label: "Lab Probes" }
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedConnectorCategory(cat.id)}
                    className={`text-[11px] px-2.5 py-1 rounded-md transition-all ${
                      selectedConnectorCategory === cat.id
                        ? "bg-amber-600/30 text-amber-300 border border-amber-500/50 font-medium"
                        : "bg-[#1c1611] text-stone-400 hover:text-stone-200 border border-[#2b2016]"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Connector List */}
              <div className="flex flex-col gap-2 max-h-[620px] overflow-y-auto pr-1">
                {filteredConnectors.map(conn => (
                  <button
                    key={conn.id}
                    onClick={() => {
                      setSelectedConnectorId(conn.id);
                      setActivePinHighlight(null);
                    }}
                    className={`text-left p-3 rounded-lg border transition-all ${
                      selectedConnectorId === conn.id
                        ? "bg-gradient-to-r from-amber-950/50 to-[#221a12] border-amber-500/60 shadow-md"
                        : "bg-[#18130e] hover:bg-[#201811] border-[#291f15]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-xs text-stone-200">{conn.name}</h4>
                      <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-stone-900 border border-stone-700 text-stone-400">
                        {conn.pinCount} {typeof conn.pinCount === "number" ? "Pins" : ""}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                      {conn.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-[10px] text-stone-500 font-mono">
                      <span>Rate: {conn.maxDataRate}</span>
                      <span>•</span>
                      <span>Volts: {conn.maxVoltage}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Main Panel: Detailed Pinout & Wiring Diagram */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* Connector Header Card */}
              <div className="bg-[#14100c] p-6 rounded-xl border border-[#2e2318] shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#2a2016] pb-4">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      {activeConnector.category.replace("_", " & ").toUpperCase()}
                    </span>
                    <h2 className="text-xl font-bold text-[#fbf6ea] mt-2">
                      {activeConnector.name}
                    </h2>
                    <p className="text-xs text-stone-400 mt-1">
                      {activeConnector.fullDescription}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {activeConnector.standards.map((std, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-1 rounded bg-[#201811] text-amber-300 border border-[#3b2d1e]">
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Electrical & Physical Metric Tiles */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                  <div className="bg-[#19130e] p-3 rounded-lg border border-[#2b2016]">
                    <span className="text-[10px] text-stone-500 uppercase font-mono">Max Voltage</span>
                    <p className="text-xs font-semibold text-amber-400 mt-0.5">{activeConnector.maxVoltage}</p>
                  </div>
                  <div className="bg-[#19130e] p-3 rounded-lg border border-[#2b2016]">
                    <span className="text-[10px] text-stone-500 uppercase font-mono">Max Current</span>
                    <p className="text-xs font-semibold text-emerald-400 mt-0.5">{activeConnector.maxCurrent}</p>
                  </div>
                  <div className="bg-[#19130e] p-3 rounded-lg border border-[#2b2016]">
                    <span className="text-[10px] text-stone-500 uppercase font-mono">Bandwidth / Rate</span>
                    <p className="text-xs font-semibold text-sky-400 mt-0.5">{activeConnector.maxDataRate}</p>
                  </div>
                  <div className="bg-[#19130e] p-3 rounded-lg border border-[#2b2016]">
                    <span className="text-[10px] text-stone-500 uppercase font-mono">Mating Durability</span>
                    <p className="text-xs font-semibold text-stone-300 mt-0.5">{activeConnector.matingCycles}</p>
                  </div>
                </div>
              </div>

              {/* Interactive Visual Pinout Grid */}
              <div className="bg-[#14100c] p-6 rounded-xl border border-[#2e2318] shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-stone-200 text-sm flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber-500" />
                    Interactive Pinout Architecture ({activeConnector.pinouts.length} Signals)
                  </h3>
                  <div className="flex items-center gap-3 text-[11px] font-mono text-stone-400">
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500" /> Power</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-stone-500" /> Ground</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-sky-500" /> Data</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500" /> Clock</span>
                  </div>
                </div>

                {/* Pinout Visual Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#2c2016] text-[11px] font-mono text-stone-400 bg-[#19130e]">
                        <th className="py-2.5 px-3">Pin #</th>
                        <th className="py-2.5 px-3">Signal Name</th>
                        <th className="py-2.5 px-3">Standard Wire Color</th>
                        <th className="py-2.5 px-3">Type</th>
                        <th className="py-2.5 px-3">Voltage Range</th>
                        <th className="py-2.5 px-3">Functional Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#241a12] text-xs">
                      {activeConnector.pinouts.map(pin => {
                        const isHighlighted = activePinHighlight === pin.pinNumber;
                        return (
                          <tr
                            key={String(pin.pinNumber)}
                            onClick={() => setActivePinHighlight(isHighlighted ? null : pin.pinNumber)}
                            className={`cursor-pointer transition-all ${
                              isHighlighted 
                                ? "bg-amber-950/60 font-medium" 
                                : "hover:bg-[#1c1610]"
                            }`}
                          >
                            <td className="py-2.5 px-3 font-mono font-bold text-amber-400">
                              {pin.pinNumber}
                            </td>
                            <td className="py-2.5 px-3 font-mono font-semibold text-stone-200">
                              {pin.pinName}
                            </td>
                            <td className="py-2.5 px-3 text-stone-400">
                              <span className="inline-flex items-center gap-1.5">
                                <span 
                                  className="w-2.5 h-2.5 rounded-full border border-stone-600" 
                                  style={{ backgroundColor: pin.wireColor?.toLowerCase().includes("red") ? "#ef4444" : pin.wireColor?.toLowerCase().includes("black") ? "#18181b" : pin.wireColor?.toLowerCase().includes("blue") ? "#3b82f6" : pin.wireColor?.toLowerCase().includes("yellow") ? "#eab308" : pin.wireColor?.toLowerCase().includes("green") ? "#22c55e" : pin.wireColor?.toLowerCase().includes("white") ? "#fafafa" : "#71717a" }}
                                />
                                {pin.wireColor || "Standard"}
                              </span>
                            </td>
                            <td className="py-2.5 px-3">
                              <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                                pin.signalType === "power" ? "bg-red-950 text-red-300 border border-red-800" :
                                pin.signalType === "ground" ? "bg-stone-900 text-stone-300 border border-stone-700" :
                                pin.signalType === "diff_p" || pin.signalType === "diff_n" ? "bg-purple-950 text-purple-300 border border-purple-800" :
                                pin.signalType === "clock" ? "bg-amber-950 text-amber-300 border border-amber-800" :
                                pin.signalType === "rf" ? "bg-rose-950 text-rose-300 border border-rose-800" :
                                "bg-sky-950 text-sky-300 border border-sky-800"
                              }`}>
                                {pin.signalType.toUpperCase()}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 font-mono text-stone-300">
                              {pin.voltageLevel}
                            </td>
                            <td className="py-2.5 px-3 text-stone-400 text-[11px] leading-relaxed">
                              {pin.description}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Engineering Guidelines & Scientific Uses */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#14100c] p-5 rounded-xl border border-[#2e2318]">
                  <h4 className="font-semibold text-xs text-amber-400 uppercase font-mono flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Wiring & Schematic Guidelines
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-300">
                    {activeConnector.wiringNotes.map((note, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-500">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                    {activeConnector.schematicTips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-sky-400">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#14100c] p-5 rounded-xl border border-[#2e2318]">
                  <h4 className="font-semibold text-xs text-amber-400 uppercase font-mono flex items-center gap-2 mb-2">
                    <Compass className="w-4 h-4 text-sky-400" />
                    Archaeometry & Field Lab Roles
                  </h4>
                  <ul className="space-y-1.5 text-xs text-stone-300">
                    {activeConnector.scientificApplications.map((app, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400">✔</span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: HARDWARE & MCU COMPATIBILITY MATRIX */}
        {/* ========================================================================= */}
        {activeTab === "hardware" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Hardware List */}
            <div className="lg:col-span-4 bg-[#14100c] p-4 rounded-xl border border-[#2e2318] flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-stone-200 text-sm flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-amber-500" />
                  Hardware Architecture Matrix
                </h3>
                <span className="text-xs text-stone-400 font-mono">
                  {filteredHardware.length} platforms
                </span>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search ESP32, Arduino, Jetson, GPR, pXRF..."
                  value={hardwareSearch}
                  onChange={(e) => setHardwareSearch(e.target.value)}
                  className="w-full bg-[#1b1510] border border-[#3b2d1e] rounded-lg pl-9 pr-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500 placeholder-stone-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: "all", label: "All Platforms" },
                  { id: "mcu", label: "Microcontrollers" },
                  { id: "sbc_edge_ai", label: "SBC & Edge AI" },
                  { id: "archaeo_sensor", label: "Field Archaeo-Sensors" },
                  { id: "scientific_instrument", label: "Scientific Instruments" }
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedHardwareCategory(cat.id)}
                    className={`text-[11px] px-2.5 py-1 rounded-md transition-all ${
                      selectedHardwareCategory === cat.id
                        ? "bg-amber-600/30 text-amber-300 border border-amber-500/50 font-medium"
                        : "bg-[#1c1611] text-stone-400 hover:text-stone-200 border border-[#2b2016]"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Platform Cards */}
              <div className="flex flex-col gap-2 max-h-[620px] overflow-y-auto pr-1">
                {filteredHardware.map(hw => (
                  <button
                    key={hw.id}
                    onClick={() => setSelectedHardwareId(hw.id)}
                    className={`text-left p-3 rounded-lg border transition-all ${
                      selectedHardwareId === hw.id
                        ? "bg-gradient-to-r from-amber-950/50 to-[#221a12] border-amber-500/60 shadow-md"
                        : "bg-[#18130e] hover:bg-[#201811] border-[#291f15]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-xs text-stone-200">{hw.name}</h4>
                      <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-stone-900 border border-stone-700 text-stone-400">
                        {hw.category.replace("_", " ")}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                      {hw.typicalArchaeologyRole}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-[10px] text-amber-400 font-mono">
                      <span>Clock: {hw.clockSpeed}</span>
                      <span>•</span>
                      <span>Logic: {hw.logicLevel}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Main Panel: Platform Detail */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="bg-[#14100c] p-6 rounded-xl border border-[#2e2318] shadow-xl">
                <div className="border-b border-[#2a2016] pb-4">
                  <span className="text-xs uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    {activeHardware.category.replace("_", " ").toUpperCase()}
                  </span>
                  <h2 className="text-xl font-bold text-[#fbf6ea] mt-2">
                    {activeHardware.name}
                  </h2>
                  <p className="text-xs text-stone-400 mt-1">
                    {activeHardware.typicalArchaeologyRole}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                  <div className="bg-[#19130e] p-3 rounded-lg border border-[#2b2016]">
                    <span className="text-[10px] text-stone-500 uppercase font-mono">Architecture</span>
                    <p className="text-xs font-semibold text-stone-200 mt-0.5">{activeHardware.socArchitecture}</p>
                  </div>
                  <div className="bg-[#19130e] p-3 rounded-lg border border-[#2b2016]">
                    <span className="text-[10px] text-stone-500 uppercase font-mono">Operating Voltage</span>
                    <p className="text-xs font-semibold text-amber-400 mt-0.5">{activeHardware.operatingVoltage}</p>
                  </div>
                  <div className="bg-[#19130e] p-3 rounded-lg border border-[#2b2016]">
                    <span className="text-[10px] text-stone-500 uppercase font-mono">I/O Logic Level</span>
                    <p className="text-xs font-semibold text-emerald-400 mt-0.5">{activeHardware.logicLevel}</p>
                  </div>
                  <div className="bg-[#19130e] p-3 rounded-lg border border-[#2b2016]">
                    <span className="text-[10px] text-stone-500 uppercase font-mono">Power Drain</span>
                    <p className="text-xs font-semibold text-sky-400 mt-0.5">{activeHardware.powerConsumption}</p>
                  </div>
                </div>

                {/* Browser Standards & Web Interfacing */}
                <div className="mt-6 p-4 rounded-lg bg-[#19130e] border border-[#302417]">
                  <h4 className="text-xs font-semibold uppercase font-mono text-amber-400 mb-2 flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    Browser Web Standards & Connection Protocol
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {activeHardware.browserWebStandards.map((std, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono font-medium">
                        ✔ {std}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed bg-[#100d0a] p-3 rounded border border-[#241a12]">
                    <span className="text-amber-400 font-semibold">Live Web Connection Guide:</span> {activeHardware.connectionGuide}
                  </p>
                </div>

                {/* Native Interfaces & Supported Connectors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 rounded-lg bg-[#19130e] border border-[#2b2016]">
                    <h5 className="text-xs font-semibold uppercase font-mono text-stone-300 mb-2">
                      Physical Connectors Supported
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {activeHardware.supportedConnectors.map((c, i) => (
                        <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-[#251c14] text-stone-300 border border-[#3b2d1e]">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-[#19130e] border border-[#2b2016]">
                    <h5 className="text-xs font-semibold uppercase font-mono text-stone-300 mb-2">
                      Hardware Buses & Native Interfaces
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {activeHardware.nativeInterfaces.map((iface, i) => (
                        <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-[#251c14] text-amber-300/80 border border-[#3b2d1e]">
                          {iface}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: LIVE WEB SERIAL TERMINAL & PACKET INSPECTOR */}
        {/* ========================================================================= */}
        {activeTab === "live_terminal" && (
          <div className="flex flex-col gap-6">
            {/* Control Strip */}
            <div className="bg-[#14100c] p-4 rounded-xl border border-[#2e2318] shadow-lg flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {/* Connection Status Button */}
                <button
                  onClick={handleToggleConnect}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                    isConnected
                      ? "bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-900/40"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/40"
                  }`}
                >
                  {isConnected ? (
                    <>
                      <Pause className="w-4 h-4" />
                      Disconnect Session
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      Connect Hardware Serial
                    </>
                  )}
                </button>

                {/* Mode Selector */}
                <div className="flex items-center bg-[#1c1611] p-1 rounded-lg border border-[#382a1c] text-xs">
                  <button
                    onClick={() => setIsSimulated(true)}
                    className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                      isSimulated ? "bg-amber-600 text-stone-950 font-bold" : "text-stone-400 hover:text-stone-200"
                    }`}
                  >
                    Virtual Simulator (All Devices)
                  </button>
                  <button
                    onClick={() => setIsSimulated(false)}
                    className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                      !isSimulated ? "bg-amber-600 text-stone-950 font-bold" : "text-stone-400 hover:text-stone-200"
                    }`}
                  >
                    Physical Web Serial Port
                  </button>
                </div>

                {/* Simulation Source */}
                {isSimulated && (
                  <select
                    value={simDataSource}
                    onChange={(e) => setSimDataSource(e.target.value as any)}
                    className="bg-[#1c1611] border border-[#3b2d1e] rounded-lg px-3 py-2 text-xs text-amber-300 font-mono focus:outline-none"
                  >
                    <option value="gps_nmea">u-blox RTK GNSS ($GNGGA Centimeter GPS)</option>
                    <option value="gpr_radar">Subsurface GPR Radar (A-Scan Reflectivity)</option>
                    <option value="pxrf_spec">pXRF Elemental Spectrometer (PPM Counts)</option>
                    <option value="imu_9dof">9-DOF Inclinometer (Pitch/Roll/Yaw Magnetometer)</option>
                    <option value="modbus_env">Modbus RTU Excavation Trench Station</option>
                  </select>
                )}
              </div>

              {/* Serial Port Configurations */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <label className="text-stone-400 flex items-center gap-1">
                  Baud:
                  <select
                    value={baudRate}
                    onChange={(e) => setBaudRate(Number(e.target.value))}
                    disabled={isConnected}
                    className="bg-[#1b1510] border border-[#3b2d1e] rounded px-2 py-1 text-stone-200 focus:outline-none"
                  >
                    {[9600, 19200, 38400, 57600, 115200, 230400, 460800, 921600].map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </label>

                <div className="flex items-center gap-1 bg-[#1b1510] px-2 py-1 rounded border border-[#3b2d1e] text-stone-400">
                  <span>8-N-1</span>
                </div>

                {/* DTR / RTS Toggles */}
                <button
                  onClick={() => setDtrState(!dtrState)}
                  className={`px-2 py-1 rounded border text-[11px] ${
                    dtrState ? "bg-amber-950 text-amber-300 border-amber-700" : "bg-[#18130e] text-stone-500 border-stone-800"
                  }`}
                >
                  DTR: {dtrState ? "HIGH" : "LOW"}
                </button>
                <button
                  onClick={() => setRtsState(!rtsState)}
                  className={`px-2 py-1 rounded border text-[11px] ${
                    rtsState ? "bg-amber-950 text-amber-300 border-amber-700" : "bg-[#18130e] text-stone-500 border-stone-800"
                  }`}
                >
                  RTS: {rtsState ? "HIGH" : "LOW"}
                </button>
              </div>
            </div>

            {/* Terminal Main Canvas & Split View */}
            <div className="bg-[#0b0907] rounded-xl border border-[#2e2318] shadow-2xl overflow-hidden flex flex-col">
              {/* Terminal View Mode Header */}
              <div className="bg-[#14100c] px-4 py-2.5 border-b border-[#2b2016] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-stone-300">
                    <Terminal className="w-3.5 h-3.5 text-amber-400" />
                    Console Monitor ({logEntries.length} lines)
                  </span>
                  <div className="flex items-center gap-2 text-[11px] text-stone-400">
                    <span>RX: <strong className="text-emerald-400">{rxByteCount} bytes</strong></span>
                    <span>TX: <strong className="text-sky-400">{txByteCount} bytes</strong></span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-[#1c1611] p-0.5 rounded border border-[#35281b]">
                    <button
                      onClick={() => setTerminalViewMode("split")}
                      className={`px-2 py-1 rounded text-[11px] ${terminalViewMode === "split" ? "bg-amber-600 text-stone-950 font-bold" : "text-stone-400"}`}
                    >
                      Split (ASCII + Hex)
                    </button>
                    <button
                      onClick={() => setTerminalViewMode("ascii")}
                      className={`px-2 py-1 rounded text-[11px] ${terminalViewMode === "ascii" ? "bg-amber-600 text-stone-950 font-bold" : "text-stone-400"}`}
                    >
                      ASCII Only
                    </button>
                    <button
                      onClick={() => setTerminalViewMode("hex")}
                      className={`px-2 py-1 rounded text-[11px] ${terminalViewMode === "hex" ? "bg-amber-600 text-stone-950 font-bold" : "text-stone-400"}`}
                    >
                      Hex Dump
                    </button>
                  </div>

                  <button
                    onClick={() => setIsAutoScroll(!isAutoScroll)}
                    className={`px-2 py-1 rounded text-[11px] border ${
                      isAutoScroll ? "bg-emerald-950 text-emerald-300 border-emerald-700" : "bg-stone-900 text-stone-400 border-stone-700"
                    }`}
                  >
                    Auto-Scroll: {isAutoScroll ? "ON" : "OFF"}
                  </button>

                  <button
                    onClick={() => setLogEntries([])}
                    className="text-stone-400 hover:text-rose-400 p-1"
                    title="Clear Terminal"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Log Output Area */}
              <div className="p-4 font-mono text-xs max-h-[500px] min-h-[380px] overflow-y-auto space-y-1.5 select-text">
                {logEntries.length === 0 ? (
                  <div className="h-64 flex flex-col items-center justify-center text-stone-500 gap-2">
                    <Radio className="w-8 h-8 opacity-40 animate-pulse" />
                    <p>Terminal Idle. Click "Connect Hardware Serial" above to begin streaming telemetry.</p>
                  </div>
                ) : (
                  logEntries.map(entry => (
                    <div
                      key={entry.id}
                      className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-1.5 rounded transition-all ${
                        entry.type === "tx" ? "bg-sky-950/30 text-sky-300 border-l-2 border-sky-500" :
                        entry.type === "sys" ? "bg-amber-950/30 text-amber-300 border-l-2 border-amber-500" :
                        "bg-[#14100c]/60 text-emerald-300 hover:bg-[#18130e]"
                      }`}
                    >
                      <div className="flex items-center gap-2 overflow-hidden">
                        <span className="text-[10px] text-stone-500 shrink-0">[{entry.timestamp}]</span>
                        <span className={`text-[10px] uppercase font-bold shrink-0 ${
                          entry.type === "tx" ? "text-sky-400" : entry.type === "sys" ? "text-amber-400" : "text-emerald-400"
                        }`}>
                          {entry.type === "tx" ? "TX" : entry.type === "sys" ? "SYS" : "RX"}
                        </span>
                        {(terminalViewMode === "ascii" || terminalViewMode === "split") && (
                          <span className="break-all whitespace-pre-wrap">{entry.text}</span>
                        )}
                      </div>

                      {(terminalViewMode === "hex" || terminalViewMode === "split") && entry.hex && (
                        <div className="text-[10px] text-stone-500 tracking-wider shrink-0 font-mono pl-4">
                          {entry.hex}
                        </div>
                      )}
                    </div>
                  ))
                )}
                <div ref={terminalEndRef} />
              </div>

              {/* Command Send Bar */}
              <form onSubmit={handleSendCommand} className="bg-[#14100c] p-3 border-t border-[#2b2016] flex items-center gap-2">
                <span className="text-amber-500 font-mono text-sm font-bold pl-2">&gt;</span>
                <input
                  type="text"
                  placeholder="Send command (e.g. *IDN?, CALIB:START, :MEAS:VOLT:DC?, PING)..."
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value)}
                  className="flex-1 bg-[#0b0907] border border-[#3b2d1e] rounded-lg px-3 py-2 text-xs font-mono text-stone-200 focus:outline-none focus:border-amber-500 placeholder-stone-600"
                />
                <button
                  type="submit"
                  disabled={!commandInput.trim()}
                  className="flex items-center gap-1.5 px-4 py-2 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-stone-950 font-bold rounded-lg text-xs transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send Packet
                </button>
              </form>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: CALCULATORS & DIAGNOSTIC ENGINES */}
        {/* ========================================================================= */}
        {activeTab === "calculators" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Calculator 1: Logic Level Shifter */}
            <div className="bg-[#14100c] p-5 rounded-xl border border-[#2e2318] shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-sm text-stone-200 flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-amber-500" />
                  Logic Level Resistor Divider
                </h3>
                <p className="text-xs text-stone-400 mb-4">
                  Calculates voltage step-down from 5V/12V/24V microcontrollers or field instruments down to 3.3V LVTTL.
                </p>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-stone-400 block mb-1">Input Voltage (V_in): {calcInputVoltage} V</label>
                    <input
                      type="range"
                      min="1.8"
                      max="24.0"
                      step="0.1"
                      value={calcInputVoltage}
                      onChange={(e) => setCalcInputVoltage(Number(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-stone-400 block mb-1">R1 (Top Resistor Ω):</label>
                      <input
                        type="number"
                        value={calcR1}
                        onChange={(e) => setCalcR1(Number(e.target.value))}
                        className="w-full bg-[#1c1611] border border-[#3b2d1e] rounded p-2 text-stone-200 font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-stone-400 block mb-1">R2 (Bottom Resistor Ω):</label>
                      <input
                        type="number"
                        value={calcR2}
                        onChange={(e) => setCalcR2(Number(e.target.value))}
                        className="w-full bg-[#1c1611] border border-[#3b2d1e] rounded p-2 text-stone-200 font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* Calculation Output Box */}
                <div className="mt-4 p-3 rounded-lg bg-[#19130e] border border-[#332517] text-center">
                  <span className="text-[10px] text-stone-500 uppercase font-mono">Calculated Output Voltage (V_out)</span>
                  <div className="text-2xl font-bold text-amber-400 font-mono mt-1">
                    {calculatedVout.toFixed(2)} V
                  </div>
                  <p className="text-[11px] text-stone-400 mt-1">
                    Formula: <code className="text-stone-300 font-mono">V_out = V_in × (R2 / (R1 + R2))</code>
                  </p>
                </div>
              </div>

              <div className="mt-4 p-2.5 rounded bg-emerald-950/30 border border-emerald-800/40 text-[11px] text-emerald-300">
                {calculatedVout >= 3.1 && calculatedVout <= 3.5 ? (
                  <span>✔ Safe for 3.3V Raspberry Pi / ESP32 GPIO inputs!</span>
                ) : calculatedVout > 3.6 ? (
                  <span className="text-rose-300 font-semibold">⚠ DANGER: Voltage exceeds 3.6V maximum limit for 3.3V MCUs!</span>
                ) : (
                  <span>Output is below 3.0V (Logic HIGH might be marginal).</span>
                )}
              </div>
            </div>

            {/* Calculator 2: NMEA Checksum XOR Engine */}
            <div className="bg-[#14100c] p-5 rounded-xl border border-[#2e2318] shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-sm text-stone-200 flex items-center gap-2 mb-3">
                  <Radio className="w-4 h-4 text-sky-400" />
                  NMEA-0183 Checksum Generator
                </h3>
                <p className="text-xs text-stone-400 mb-3">
                  Calculates standard 8-bit XOR checksum between '$' and '*' for GPS/GNSS and GPR sentences.
                </p>

                <div className="text-xs space-y-2">
                  <label className="text-stone-400 block">Raw NMEA Sentence Body:</label>
                  <textarea
                    rows={3}
                    value={checksumInputText}
                    onChange={(e) => setChecksumInputText(e.target.value)}
                    className="w-full bg-[#1c1611] border border-[#3b2d1e] rounded p-2 text-stone-200 font-mono text-xs focus:outline-none"
                  />
                </div>

                <div className="mt-3 p-3 rounded-lg bg-[#19130e] border border-[#332517]">
                  <span className="text-[10px] text-stone-500 uppercase font-mono">Validated NMEA Stream String:</span>
                  <div className="text-xs font-mono text-sky-300 font-bold break-all mt-1 p-2 bg-[#0d0a08] rounded border border-[#241a12]">
                    {generatedNmeaChecksum || "Waiting for input..."}
                  </div>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(generatedNmeaChecksum)}
                className="mt-4 w-full py-2 bg-[#1f1710] hover:bg-[#2c2016] border border-[#3a2c1f] text-stone-300 rounded text-xs font-mono transition-all flex items-center justify-center gap-2"
              >
                <Copy className="w-3.5 h-3.5" />
                Copy Formatted NMEA
              </button>
            </div>

            {/* Calculator 3: Modbus RTU CRC-16 Engine */}
            <div className="bg-[#14100c] p-5 rounded-xl border border-[#2e2318] shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-sm text-stone-200 flex items-center gap-2 mb-3">
                  <Server className="w-4 h-4 text-emerald-400" />
                  Modbus RTU CRC-16 Calculator
                </h3>
                <p className="text-xs text-stone-400 mb-3">
                  Computes 16-bit CRC polynomial (0xA001) with Little-Endian byte ordering for industrial RS-485 sensors.
                </p>

                <div className="text-xs space-y-2">
                  <label className="text-stone-400 block">Modbus Hex Bytes (Space separated):</label>
                  <input
                    type="text"
                    value={modbusInputHex}
                    onChange={(e) => setModbusInputHex(e.target.value)}
                    className="w-full bg-[#1c1611] border border-[#3b2d1e] rounded p-2 text-stone-200 font-mono text-xs focus:outline-none"
                  />
                </div>

                <div className="mt-3 p-3 rounded-lg bg-[#19130e] border border-[#332517]">
                  <span className="text-[10px] text-stone-500 uppercase font-mono">Complete Modbus Frame with CRC:</span>
                  <div className="text-xs font-mono text-emerald-300 font-bold break-all mt-1 p-2 bg-[#0d0a08] rounded border border-[#241a12]">
                    {generatedModbusCrc || "Waiting for input..."}
                  </div>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(generatedModbusCrc)}
                className="mt-4 w-full py-2 bg-[#1f1710] hover:bg-[#2c2016] border border-[#3a2c1f] text-stone-300 rounded text-xs font-mono transition-all flex items-center justify-center gap-2"
              >
                <Copy className="w-3.5 h-3.5" />
                Copy Modbus Frame
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: FIRMWARE & DRIVER CODE GENERATOR */}
        {/* ========================================================================= */}
        {activeTab === "firmware_gen" && (
          <div className="bg-[#14100c] p-6 rounded-xl border border-[#2e2318] shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#2a2016] pb-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-[#fbf6ea] flex items-center gap-2">
                  <Code className="w-5 h-5 text-amber-500" />
                  Embedded Firmware & Driver Code Exporter
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  Ready-to-flash production driver code for streaming telemetry directly to the Granth browser applet.
                </p>
              </div>

              {/* Platform & Protocol Selectors */}
              <div className="flex flex-wrap items-center gap-3">
                <select
                  value={firmwarePlatform}
                  onChange={(e) => setFirmwarePlatform(e.target.value as any)}
                  className="bg-[#1c1611] border border-[#3b2d1e] rounded-lg px-3 py-2 text-xs text-amber-400 font-semibold focus:outline-none"
                >
                  <option value="arduino">Arduino C++ (Uno, Mega, Nano, R4)</option>
                  <option value="esp32">ESP32-S3 / ESP32-C3 (FreeRTOS Dual-Core)</option>
                  <option value="rpi_python">Raspberry Pi 4/5 (Python 3 PySerial)</option>
                  <option value="nodejs">Node.js WebSockets Serial Bridge</option>
                </select>

                <button
                  onClick={() => copyToClipboard(getGeneratedFirmwareCode())}
                  className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-lg text-xs transition-all shadow-md"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-stone-950" /> : <Copy className="w-4 h-4" />}
                  {copiedCode ? "Copied to Clipboard!" : "Copy Source Code"}
                </button>
              </div>
            </div>

            {/* Code Display Area */}
            <div className="relative rounded-lg overflow-hidden border border-[#302316] bg-[#0b0907]">
              <div className="bg-[#19130e] px-4 py-2 text-[11px] font-mono text-stone-400 border-b border-[#2b2016] flex items-center justify-between">
                <span>
                  Language: {firmwarePlatform === "rpi_python" ? "Python 3" : firmwarePlatform === "nodejs" ? "JavaScript / TypeScript" : "C++ (Arduino / ESP-IDF)"}
                </span>
                <span>Baud: 115200 8-N-1 • CDC Serial</span>
              </div>
              <pre className="p-4 text-xs font-mono text-stone-200 overflow-x-auto max-h-[550px] leading-relaxed select-all">
                <code>{getGeneratedFirmwareCode()}</code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
