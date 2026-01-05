// Mock data for Time Registration Custom API connector
// This file demonstrates the data structure expected from time registration custom API connectors
// Replace this mock data with real custom connector calls in your implementation

export interface TimeRegistration {
  // Employee number
  employeeNo: string;
  // Work location identifier
  workLocation: string;
  // Work role code
  workRoleCode: string;
  // System date entry
  systemDateEntry: string;
  // System time entry
  systemTimeEntry: string;
  // System date exit
  systemDateExit: string;
  // System time exit
  systemTimeExit: string;
  // User date entry
  userDateEntry: string;
  // User time entry
  userTimeEntry: string;
  // User date exit
  userDateExit: string;
  // User time exit
  userTimeExit: string;
  // Number of hours worked
  noOfHours: number;
  // Status of the entry
  status: string;
  // Entry status
  entryStatus: string;
  // Leaving status
  leavingStatus: string;
  // Entry method
  entryMethod: string;
  // Entry employee comment
  entryEmployeeComment: string;
  // Origin logon
  originLogon: string;
  // Check-in date and time
  checkInDateTime: string;
  // Check-out date and time
  checkOutDateTime: string;
  // Duration in minutes
  durationMinutes: number;
}

// Mock time registration records for API responses - matches the Power Platform custom connector structure
export const mockTimeRegistrations: TimeRegistration[] = [
  {
    employeeNo: "0066",
    workLocation: "S0001",
    workRoleCode: "CASHIER",
    systemDateEntry: "2026-01-05",
    systemTimeEntry: "09:07:33.997",
    systemDateExit: "2026-01-05",
    systemTimeExit: "09:07:45.147",
    userDateEntry: "0001-01-01",
    userTimeEntry: "00:00:00",
    userDateExit: "0001-01-01",
    userTimeExit: "00:00:00",
    noOfHours: 0.01,
    status: "Processed",
    entryStatus: "OK",
    leavingStatus: "OK",
    entryMethod: "Automatic Entry",
    entryEmployeeComment: "",
    originLogon: "ADMIN",
    checkInDateTime: "2026-01-05T09:07:33.997Z",
    checkOutDateTime: "2026-01-05T09:07:45.147Z",
    durationMinutes: 0.60
  },
  {
    employeeNo: "0123",
    workLocation: "S0001",
    workRoleCode: "MANAGER",
    systemDateEntry: "2026-01-05",
    systemTimeEntry: "08:00:15.123",
    systemDateExit: "2026-01-05",
    systemTimeExit: "17:30:22.456",
    userDateEntry: "0001-01-01",
    userTimeEntry: "00:00:00",
    userDateExit: "0001-01-01",
    userTimeExit: "00:00:00",
    noOfHours: 9.50,
    status: "Processed",
    entryStatus: "OK",
    leavingStatus: "OK",
    entryMethod: "Automatic Entry",
    entryEmployeeComment: "",
    originLogon: "SYSTEM",
    checkInDateTime: "2026-01-05T08:00:15.123Z",
    checkOutDateTime: "2026-01-05T17:30:22.456Z",
    durationMinutes: 570.12
  },
  {
    employeeNo: "0234",
    workLocation: "S0002",
    workRoleCode: "SALES",
    systemDateEntry: "2026-01-05",
    systemTimeEntry: "09:15:00.000",
    systemDateExit: "2026-01-05",
    systemTimeExit: "18:00:00.000",
    userDateEntry: "0001-01-01",
    userTimeEntry: "00:00:00",
    userDateExit: "0001-01-01",
    userTimeExit: "00:00:00",
    noOfHours: 8.75,
    status: "Processed",
    entryStatus: "OK",
    leavingStatus: "OK",
    entryMethod: "Manual Entry",
    entryEmployeeComment: "Late arrival - traffic",
    originLogon: "ADMIN",
    checkInDateTime: "2026-01-05T09:15:00.000Z",
    checkOutDateTime: "2026-01-05T18:00:00.000Z",
    durationMinutes: 525.00
  },
  {
    employeeNo: "0345",
    workLocation: "S0001",
    workRoleCode: "CASHIER",
    systemDateEntry: "2026-01-05",
    systemTimeEntry: "10:00:00.000",
    systemDateExit: "2026-01-05",
    systemTimeExit: "14:00:00.000",
    userDateEntry: "0001-01-01",
    userTimeEntry: "00:00:00",
    userDateExit: "0001-01-01",
    userTimeExit: "00:00:00",
    noOfHours: 4.00,
    status: "Processed",
    entryStatus: "OK",
    leavingStatus: "OK",
    entryMethod: "Automatic Entry",
    entryEmployeeComment: "",
    originLogon: "SYSTEM",
    checkInDateTime: "2026-01-05T10:00:00.000Z",
    checkOutDateTime: "2026-01-05T14:00:00.000Z",
    durationMinutes: 240.00
  },
  {
    employeeNo: "0456",
    workLocation: "S0003",
    workRoleCode: "SUPERVISOR",
    systemDateEntry: "2026-01-05",
    systemTimeEntry: "07:45:30.000",
    systemDateExit: "2026-01-05",
    systemTimeExit: "16:15:45.000",
    userDateEntry: "0001-01-01",
    userTimeEntry: "00:00:00",
    userDateExit: "0001-01-01",
    userTimeExit: "00:00:00",
    noOfHours: 8.50,
    status: "Processed",
    entryStatus: "OK",
    leavingStatus: "OK",
    entryMethod: "Automatic Entry",
    entryEmployeeComment: "",
    originLogon: "SYSTEM",
    checkInDateTime: "2026-01-05T07:45:30.000Z",
    checkOutDateTime: "2026-01-05T16:15:45.000Z",
    durationMinutes: 510.25
  },
  {
    employeeNo: "0567",
    workLocation: "S0002",
    workRoleCode: "CASHIER",
    systemDateEntry: "2026-01-05",
    systemTimeEntry: "11:00:00.000",
    systemDateExit: "2026-01-05",
    systemTimeExit: "19:30:00.000",
    userDateEntry: "0001-01-01",
    userTimeEntry: "00:00:00",
    userDateExit: "0001-01-01",
    userTimeExit: "00:00:00",
    noOfHours: 8.50,
    status: "Pending",
    entryStatus: "OK",
    leavingStatus: "Pending",
    entryMethod: "Automatic Entry",
    entryEmployeeComment: "",
    originLogon: "SYSTEM",
    checkInDateTime: "2026-01-05T11:00:00.000Z",
    checkOutDateTime: "2026-01-05T19:30:00.000Z",
    durationMinutes: 510.00
  },
  {
    employeeNo: "0678",
    workLocation: "S0001",
    workRoleCode: "WAREHOUSE",
    systemDateEntry: "2026-01-05",
    systemTimeEntry: "06:00:00.000",
    systemDateExit: "2026-01-05",
    systemTimeExit: "14:30:00.000",
    userDateEntry: "0001-01-01",
    userTimeEntry: "00:00:00",
    userDateExit: "0001-01-01",
    userTimeExit: "00:00:00",
    noOfHours: 8.50,
    status: "Processed",
    entryStatus: "OK",
    leavingStatus: "OK",
    entryMethod: "Manual Entry",
    entryEmployeeComment: "Early shift",
    originLogon: "ADMIN",
    checkInDateTime: "2026-01-05T06:00:00.000Z",
    checkOutDateTime: "2026-01-05T14:30:00.000Z",
    durationMinutes: 510.00
  },
  {
    employeeNo: "0789",
    workLocation: "S0003",
    workRoleCode: "SALES",
    systemDateEntry: "2026-01-05",
    systemTimeEntry: "09:00:00.000",
    systemDateExit: "2026-01-05",
    systemTimeExit: "17:00:00.000",
    userDateEntry: "0001-01-01",
    userTimeEntry: "00:00:00",
    userDateExit: "0001-01-01",
    userTimeExit: "00:00:00",
    noOfHours: 8.00,
    status: "Processed",
    entryStatus: "OK",
    leavingStatus: "OK",
    entryMethod: "Automatic Entry",
    entryEmployeeComment: "",
    originLogon: "SYSTEM",
    checkInDateTime: "2026-01-05T09:00:00.000Z",
    checkOutDateTime: "2026-01-05T17:00:00.000Z",
    durationMinutes: 480.00
  },
  {
    employeeNo: "0890",
    workLocation: "S0001",
    workRoleCode: "CASHIER",
    systemDateEntry: "2026-01-04",
    systemTimeEntry: "13:00:00.000",
    systemDateExit: "2026-01-04",
    systemTimeExit: "21:00:00.000",
    userDateEntry: "0001-01-01",
    userTimeEntry: "00:00:00",
    userDateExit: "0001-01-01",
    userTimeExit: "00:00:00",
    noOfHours: 8.00,
    status: "Processed",
    entryStatus: "OK",
    leavingStatus: "OK",
    entryMethod: "Automatic Entry",
    entryEmployeeComment: "",
    originLogon: "SYSTEM",
    checkInDateTime: "2026-01-04T13:00:00.000Z",
    checkOutDateTime: "2026-01-04T21:00:00.000Z",
    durationMinutes: 480.00
  },
  {
    employeeNo: "0901",
    workLocation: "S0002",
    workRoleCode: "MANAGER",
    systemDateEntry: "2026-01-04",
    systemTimeEntry: "08:30:00.000",
    systemDateExit: "2026-01-04",
    systemTimeExit: "18:00:00.000",
    userDateEntry: "0001-01-01",
    userTimeEntry: "00:00:00",
    userDateExit: "0001-01-01",
    userTimeExit: "00:00:00",
    noOfHours: 9.50,
    status: "Processed",
    entryStatus: "OK",
    leavingStatus: "OK",
    entryMethod: "Automatic Entry",
    entryEmployeeComment: "",
    originLogon: "SYSTEM",
    checkInDateTime: "2026-01-04T08:30:00.000Z",
    checkOutDateTime: "2026-01-04T18:00:00.000Z",
    durationMinutes: 570.00
  }
];
