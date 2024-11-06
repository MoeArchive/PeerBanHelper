package com.ghostchu.peerbanhelper.database.dao.impl;

import com.ghostchu.peerbanhelper.database.Database;
import com.ghostchu.peerbanhelper.database.dao.AbstractPBHDao;
import com.ghostchu.peerbanhelper.database.table.ScriptStorageEntity;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
@Slf4j
public class ScriptStorageDao extends AbstractPBHDao<ScriptStorageEntity, String> {
    public ScriptStorageDao(@Autowired Database database) throws SQLException {
        super(database.getDataSource(), ScriptStorageEntity.class);
    }

    public void put(String key, String value) {
        ScriptStorageEntity entity = new ScriptStorageEntity(key, value);
        try {
            createOrUpdate(entity);
        } catch (SQLException e) {
            log.warn("Unable to create/update script storage entity", e);
        }
    }

    public String get(String key) {
        try {
            var entity = queryForId(key);
            if (entity != null) {
                return entity.getValue();
            }
            return null;
        } catch (SQLException e) {
            log.warn("Unable to get script storage entity", e);
            return null;
        }
    }

    public List<String> keys() {
        try {
            return queryForAll().stream().map(ScriptStorageEntity::getKey).toList();
        } catch (SQLException e) {
            log.warn("Unable to get script storage keys", e);
            return List.of();
        }
    }

    public List<String> values() {
        try {
            return queryForAll().stream().map(ScriptStorageEntity::getValue).toList();
        } catch (SQLException e) {
            log.warn("Unable to get script storage values", e);
            return List.of();
        }
    }

    public List<String> keysStartWith(String prefix) {
        try {
            return queryBuilder().where().like("key", prefix + "%").query().stream().map(ScriptStorageEntity::getKey).toList();
        } catch (SQLException e) {
            log.warn("Unable to get script storage keys", e);
            return List.of();
        }
    }

    public List<String> valuesStartWith(String prefix) {
        try {
            return queryBuilder().where().like("value", prefix + "%").query().stream().map(ScriptStorageEntity::getValue).toList();
        } catch (SQLException e) {
            log.warn("Unable to get script storage values", e);
            return List.of();
        }
    }

    public Map<String, String> entries(int offset, int limit) {
        try {
            return queryBuilder()
                    .offset(Long.valueOf(offset))
                    .limit(Long.valueOf(limit))
                    .query()
                    .stream()
                    .collect(Collectors.toMap(
                        ScriptStorageEntity::getKey,
                        ScriptStorageEntity::getValue,
                        (existing, replacement) -> {
                            log.warn("Duplicate key found: {}", existing);
                            return replacement;
                        }
                    ));
        } catch (SQLException e) {
            log.warn("Unable to get script storage entries", e);
            return Map.of();
        }
    }
}
