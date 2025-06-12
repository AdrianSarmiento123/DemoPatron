import React, { useEffect, useState } from 'react';
import { getDashboardData } from '../api';
import './Dashboard.css';
//Demo

const Dashboard = ({ usuarioId }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const result = await getDashboardData(usuarioId);
        setData(result);
      } catch (err) {
        console.error("Error al cargar dashboard", err);
      }
    };
    fetchDashboard();
  }, [usuarioId]);

  if (!data) return <p className="loading-text">Cargando dashboard...</p>;

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard del Usuario #{data.usuarioId}</h1>

      <div className="dashboard-grid">
        {/* Reservas */}
        <div className="dashboard-card">
          <h2>Reservas</h2>
          {data.reservas.length === 0 ? (
            <p>No hay reservas</p>
          ) : (
            data.reservas.map((r, i) => (
              <p key={i}>{r.espacio} - {r.fecha}</p>
            ))
          )}
        </div>

        {/* Pagos */}
        <div className="dashboard-card">
          <h2>Pagos</h2>
          {data.pagos.length === 0 ? (
            <p>No hay pagos</p>
          ) : (
            data.pagos.map((p, i) => (
              <p key={i}>S/{p.monto} - {p.estado}</p>
            ))
          )}
        </div>

        {/* Notificaciones */}
        <div className="dashboard-card">
          <h2>Notificaciones</h2>
          {data.notificaciones.length === 0 ? (
            <p>Sin notificaciones</p>
          ) : (
            data.notificaciones.map((n, i) => (
              <p key={i}>{n.mensaje}</p>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
