import { Text, Card, makeStyles, shorthands, tokens, Button, Badge, Tooltip } from '@fluentui/react-components';
import { ClockRegular } from '@fluentui/react-icons';
import PageHeader from '../components/PageHeader';
import { DEVES_BusinessCentralService } from '../generated/services/DEVES_BusinessCentralService';
import type { TimeRegistration } from '../generated/models/DEVES_BusinessCentralModel';
import { useState, useEffect } from 'react';

const useStyles = makeStyles({
  container: {
    maxWidth: '1200px',
    ...shorthands.margin('0', 'auto'),
  },
  section: {
    marginBottom: '32px',
  },
  sectionTitle: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
    marginBottom: '16px',
  },
  dataGrid: {
    overflow: 'auto',
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorNeutralBackground1,
  },
  mockDataBadge: {
    marginBottom: '16px',
  },

});

export default function CustomApiPage() {
  const styles = useStyles();
  const [registrations, setRegistrations] = useState<TimeRegistration[]>([]);
  const [loadingRegistrations, setLoadingRegistrations] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load mock time registration data (simulating API call)
  useEffect(() => {
    loadRegistrations();
  }, []);

  const loadRegistrations = async () => {
    try {
      setLoadingRegistrations(true);
      setError(null);
      
      const result = await DEVES_BusinessCentralService.GetTimeRegistration();
      
      if (result.success && result.data) {
        setRegistrations(result.data.value || []);
        console.log('Loaded time registrations:', result.data.value?.length);
      } else {
        setError(result.error?.message || 'Failed to load time registrations');
        setRegistrations([]);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while loading time registrations');
      setRegistrations([]);
    } finally {
      setLoadingRegistrations(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processed': return 'success';
      case 'Pending': return 'warning';
      case 'Failed': return 'danger';
      default: return 'subtle';
    }
  };

  const formatDateTime = (dateTime: string) => {
    if (!dateTime) return '-';
    const date = new Date(dateTime);
    return date.toLocaleString('en-US', { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit',
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  return (
    <div className={styles.container}>
      <PageHeader
        title="Business Central Time Registration"
        subtitle="Live time registration data from Business Central. This page connects to your Business Central custom connector to display real employee time tracking records."
        icon={<ClockRegular />}
      />

      <Badge className={styles.mockDataBadge} appearance="tint" color="success">
        ✅ Live Data - Connected to Business Central
      </Badge>

      {/* Sample Data */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>⏱️ Time Registration Records</h3>
        
        {loadingRegistrations ? (
          <Card style={{ padding: '24px', textAlign: 'center' }}>
            <Text>Loading time registration data...</Text>
          </Card>
        ) : error ? (
          <Card style={{ padding: '24px', backgroundColor: tokens.colorNeutralBackground2 }}>
            <Text style={{ color: tokens.colorPaletteRedForeground2 }}>
              Error loading registrations: {error}
            </Text>
            <Button 
              style={{ marginTop: '12px' }} 
              onClick={loadRegistrations}
              appearance="primary"
            >
              Retry
            </Button>
          </Card>
        ) : (
          <Card style={{ padding: '16px', backgroundColor: tokens.colorNeutralBackground2, marginBottom: '16px', border: `2px solid ${tokens.colorNeutralStroke2}` }}>
            <div style={{ textAlign: 'center' }}>
              <Text style={{ color: tokens.colorNeutralForeground1, lineHeight: tokens.lineHeightBase300, display: 'block', marginBottom: '8px', fontSize: tokens.fontSizeBase200, fontWeight: tokens.fontWeightSemibold }}>
                🔗 Connected to Business Central API
              </Text>
              <Text style={{ color: tokens.colorNeutralForeground2, lineHeight: tokens.lineHeightBase300, fontSize: tokens.fontSizeBase100 }}>
                Displaying real-time employee time registration data from your Business Central system.
              </Text>
            </div>
          </Card>
        )}
        
        {!loadingRegistrations && !error && (
          <Card>
            <div style={{ overflow: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: tokens.colorNeutralBackground2, borderBottom: `1px solid ${tokens.colorNeutralStroke2}` }}>
                    <th style={{ padding: '12px', textAlign: 'left', borderRight: `1px solid ${tokens.colorNeutralStroke2}`, fontWeight: tokens.fontWeightSemibold }}>Employee</th>
                    <th style={{ padding: '12px', textAlign: 'left', borderRight: `1px solid ${tokens.colorNeutralStroke2}`, fontWeight: tokens.fontWeightSemibold }}>Location</th>
                    <th style={{ padding: '12px', textAlign: 'left', borderRight: `1px solid ${tokens.colorNeutralStroke2}`, fontWeight: tokens.fontWeightSemibold }}>Role</th>
                    <th style={{ padding: '12px', textAlign: 'left', borderRight: `1px solid ${tokens.colorNeutralStroke2}`, fontWeight: tokens.fontWeightSemibold }}>Check In</th>
                    <th style={{ padding: '12px', textAlign: 'left', borderRight: `1px solid ${tokens.colorNeutralStroke2}`, fontWeight: tokens.fontWeightSemibold }}>Check Out</th>
                    <th style={{ padding: '12px', textAlign: 'left', borderRight: `1px solid ${tokens.colorNeutralStroke2}`, fontWeight: tokens.fontWeightSemibold }}>Hours</th>
                    <th style={{ padding: '12px', textAlign: 'left', borderRight: `1px solid ${tokens.colorNeutralStroke2}`, fontWeight: tokens.fontWeightSemibold }}>Status</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontWeight: tokens.fontWeightSemibold }}>Method</th>
                  </tr>
                </thead>
                <tbody>
                  {registrations.map((registration, index) => (
                    <tr key={`${registration.employeeNo}-${registration.checkInDateTime}`} style={{ 
                      backgroundColor: index % 2 === 0 ? tokens.colorNeutralBackground1 : tokens.colorNeutralBackground2,
                      borderBottom: `1px solid ${tokens.colorNeutralStroke2}`
                    }}>
                      <td style={{ padding: '12px', borderRight: `1px solid ${tokens.colorNeutralStroke2}` }}>
                        <Tooltip content={`Employee #${registration.employeeNo}`} relationship="description">
                          <code style={{ fontSize: tokens.fontSizeBase200, fontFamily: 'monospace', color: tokens.colorNeutralForeground2, fontWeight: tokens.fontWeightSemibold }}>
                            {registration.employeeNo}
                          </code>
                        </Tooltip>
                      </td>
                      <td style={{ padding: '12px', borderRight: `1px solid ${tokens.colorNeutralStroke2}` }}>
                        <Text>{registration.workLocation}</Text>
                      </td>
                      <td style={{ padding: '12px', borderRight: `1px solid ${tokens.colorNeutralStroke2}` }}>
                        <Badge appearance="tint" color="brand">
                          {registration.workRoleCode}
                        </Badge>
                      </td>
                      <td style={{ padding: '12px', borderRight: `1px solid ${tokens.colorNeutralStroke2}` }}>
                        <Tooltip content={registration.checkInDateTime} relationship="description">
                          <Text style={{ fontSize: tokens.fontSizeBase200 }}>
                            {formatDateTime(registration.checkInDateTime)}
                          </Text>
                        </Tooltip>
                      </td>
                      <td style={{ padding: '12px', borderRight: `1px solid ${tokens.colorNeutralStroke2}` }}>
                        <Tooltip content={registration.checkOutDateTime} relationship="description">
                          <Text style={{ fontSize: tokens.fontSizeBase200 }}>
                            {formatDateTime(registration.checkOutDateTime)}
                          </Text>
                        </Tooltip>
                      </td>
                      <td style={{ padding: '12px', borderRight: `1px solid ${tokens.colorNeutralStroke2}` }}>
                        <Tooltip content={`${registration.durationMinutes} minutes`} relationship="description">
                          <Text weight="semibold">{registration.noOfHours.toFixed(2)}h</Text>
                        </Tooltip>
                      </td>
                      <td style={{ padding: '12px', borderRight: `1px solid ${tokens.colorNeutralStroke2}` }}>
                        <Badge 
                          appearance="filled" 
                          color={getStatusColor(registration.status)}
                        >
                          {registration.status}
                        </Badge>
                      </td>
                      <td style={{ padding: '12px' }}>
                        <Tooltip content={registration.entryEmployeeComment || 'No comment'} relationship="description">
                          <Text style={{ fontSize: tokens.fontSizeBase100 }}>{registration.entryMethod}</Text>
                        </Tooltip>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </section>

      {/* Integration Note */}
      <Card style={{ padding: '24px', backgroundColor: tokens.colorNeutralBackground2, marginTop: '32px' }}>
        <Text weight="semibold" style={{ display: 'block', marginBottom: '12px', color: tokens.colorNeutralForeground1 }}>
          ✨ Business Central Integration Active
        </Text>
        <Text style={{ color: tokens.colorNeutralForeground2, lineHeight: tokens.lineHeightBase300 }}>
          This page is connected to your Business Central time registration API. The data shown above is live from your Business Central environment, 
          displaying real employee check-in/check-out times, work hours, locations, roles, and status information.
        </Text>
      </Card>
    </div>
  );
}
